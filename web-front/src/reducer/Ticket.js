import axios from "../enabler/Axios"
import {showNotification, NotificationType} from "./Notification";

const TICKET_NEW = "TICKET_NEW"
const TICKET_ADD = "TICKET_ADD"
const TICKET_LIST = "TICKET_LIST"
const CLIENT_DETAILS = "CLIENT_DETAILS"

export function getDataForNew(idClient){
    return dispatch => {
        axios.get(`/commercial/tickets/GetDataForNewTicket/${idClient}`)
            .then((response) => {
                console.log(response)
                dispatch({
                    type: TICKET_NEW,
                    payload: response.data
                })
                dispatch({
                    type: CLIENT_DETAILS,
                    payload: response.data.Client
                })
            })
            .catch((error) => {
                console.log(error)
                showNotification(NotificationType.ERROR, "Une erreur s'est produite. Impossible de charger les détails du client.")
            })
    }
}

const initialState = { context: {openMode : [], subject: []}, liste: [], localisation: {zones : [], emplacements: []} };
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TICKET_NEW :
            return {
                ...state,
                context: action.payload
            }
        default :
            return {...state}
    }
}

const TicketRx = {
    reducer : reducer,
    getNew : getDataForNew,
}

export default TicketRx;
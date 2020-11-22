import axios from "../enabler/Axios"
import {showNotification, NotificationType} from "./Notification";
import { SubmissionError } from 'redux-form'   
import { CALL_HISTORY_METHOD, LOCATION_CHANGE, push } from "connected-react-router"  

const TICKET_NEW = "TICKET_NEW"
const TICKET_DETAILS = "TICKET_DETAILS"
const TICKET_LIST = "TICKET_LIST"
const CLIENT_DETAILS = "CLIENT_DETAILS"

export function AddNewTicket(values){
    return dispatch => {
        return axios.post('/commercial/tickets/AddNewTicket', values)
        .then((response) => {
            dispatch({
                type: "NOTIFICATION_SHOW",
                payload: {
                    message: response.data.Message,
                    type: NotificationType.SUCCESS
                }
            })
            return `/commercial/ticket/${response.data.Reference}/traiter`
        })
        .catch((error) => {
            var obj = {};
            for(var element in error.response.data.errors){
                obj[element] = error.response.data.errors[element][0]
            }
            throw new SubmissionError(obj)
        })
    }
}

export function AddActionTicket(values){

}

export function getDataForNew(idClient){
    return dispatch => {
        axios.get(`/commercial/tickets/GetDataForNewTicket/${idClient}`)
            .then((response) => {
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

export function getTicketDetails(reference){
    return dispatch => {
        axios.get(`/commercial/tickets/GetTicketDetails/${reference}`)
            .then((response) => {
                dispatch({
                    type: TICKET_DETAILS,
                    payload: response.data
                })
            })
            .catch((error) => {
                console.log(error)
                showNotification(NotificationType.ERROR, "Une erreur s'est produite. Impossible de charger les détails du ticket.")
            })
    }
}

const initialState = { details: {Ticket: null}, context: {openMode : [], subject: []}, liste: [], localisation: {zones : [], emplacements: []} };
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TICKET_NEW :
            return {
                ...state,
                context: action.payload
            }
        case TICKET_DETAILS :
            return {
                ...state,
                details: action.payload
            }
        default :
            return {...state}
    }
}

const TicketRx = {
    reducer : reducer,
    getNew : getDataForNew,
    addNew : AddNewTicket,
    details : getTicketDetails,
    addAction : AddActionTicket,
}

export default TicketRx;
import axios from "../enabler/Axios"
import {showNotification, NotificationType} from "./Notification";

const CLIENT_SEARCH = "CLIENT_SEARCH"
const CLIENT_DETAILS = "CLIENT_DETAILS"

export function searchClient(subject){
    return dispatch => {
        axios.get(`/commercial/clients/SearchGeaClient?subject=${subject}`)
            .then((response) => {
                console.log(response)
                dispatch({
                    type: CLIENT_SEARCH,
                    payload: response.data
                })
            })
            .catch((error) => {
                console.log(error)
                showNotification(NotificationType.ERROR, "Une erreur s'est produite. Impossible de charger les clients.")
            })
    }
}
export function getClientDetails(id){
    return dispatch => {
        axios.get(`/commercial/clients/ClientGeaDetails/${id}`)
            .then((response) => {
                console.log(response)
                dispatch({
                    type: CLIENT_DETAILS,
                    payload: response.data
                })
            })
            .catch((error) => {
                console.log(error)
                showNotification(NotificationType.ERROR, "Une erreur s'est produite. Impossible de charger les détails du client.")
            })
    }
}


const initialState = { liste : [], selected : null };
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CLIENT_SEARCH :
            return {
                ...state,
                liste: action.payload
            }
        case CLIENT_DETAILS :
            return {
                ...state,
                selected: action.payload
            }
        default :
            return {...state}
    }
}

const ClientRx = {
    reducer : reducer,
    search : searchClient,
    details: getClientDetails
}

export default ClientRx;

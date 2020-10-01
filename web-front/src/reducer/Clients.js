import axios from "../enabler/Axios"
import {showNotification, NotificationType} from "./Notification";

const CLIENT_LOAD = "CLIENT_LOAD"

export function searchClient(subject){
    return dispatch => {
        axios.get(`/commercial/clients/SearchGeaClient?subject=${subject}`)
            .then((response) => {
                console.log(response)
                dispatch({
                    type: CLIENT_LOAD,
                    payload: response.data
                })
            })
            .catch((error) => {
                console.log(error)
                showNotification(NotificationType.ERROR, "Une erreur s'est produite. Impossible de charger les clients.")
            })
    }
}


const initialState = { liste : [] };
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CLIENT_LOAD :
            return {
                liste: action.payload
            }
        default :
            return {...state}
    }
}

const ClientRx = {
    reducer : reducer,
    search : searchClient
}

export default ClientRx;

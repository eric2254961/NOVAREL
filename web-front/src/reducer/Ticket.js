import axios from "../enabler/Axios"
import {showNotification, NotificationType} from "./Notification";
import { SubmissionError } from 'redux-form'  

const TICKET_NEW = "TICKET_NEW"
const TICKET_DETAILS = "TICKET_DETAILS"
const TICKET_ACTIONS = "TICKET_ACTIONS"
const TICKET_LIST = "TICKET_LIST"

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
        }).catch((error) => {
            var obj = {};
            for(var element in error.response.data.errors){
                obj[element] = error.response.data.errors[element][0]
            }
            throw new SubmissionError(obj)
        })
    }
}

export function AddActionTicket(values){
    return dispatch => {
        return axios.post('/commercial/tickets/AddNewAction', values)
        .then((response) => {
            dispatch({
                type: "NOTIFICATION_SHOW",
                payload: {
                    message: response.data.Message,
                    type: NotificationType.SUCCESS
                }
            })
            return true
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

export function ListTickets(page){
    return dispatch => {
        axios.get(`/commercial/tickets/GetTicketListe`)
            .then((response) => {
                dispatch({
                    type: TICKET_LIST,
                    payload: response.data
                })
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error)
                showNotification(NotificationType.ERROR, "Une erreur s'est produite. Impossible de charger les détails du client.")
            })
    }
}

export function ListActionTicket(ticketReference){
    return dispatch => {
        axios.get(`/commercial/tickets/GetTicketActionListe/${ticketReference}`)
            .then((response) => {
                dispatch({
                    type: TICKET_ACTIONS,
                    payload: response.data
                })
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error)
                showNotification(NotificationType.ERROR, "Une erreur s'est produite. Impossible de charger les détails du client.")
            })
    }
}

export function getDataForNew(idClient){
    return dispatch => {
        axios.get(`/commercial/tickets/GetDataForNewTicket/${idClient}`)
            .then((response) => {
                dispatch({
                    type: TICKET_NEW,
                    payload: response.data
                })
                console.log(response.data)
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

const initialState = {liste: [], details: {Ticket: null}, context: {openMode : [], subject: []}, liste: [], localisation: {zones : [], emplacements: []} };
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TICKET_LIST :
            return {
                ...state,
                liste: action.payload
            }
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
        case TICKET_ACTIONS : 
            return {
                ...state,
                details:{
                    ...state.details,
                    Ticket: {
                        ...state.details.Ticket,
                        Actions: action.payload
                    }
                }
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
    getActions: ListActionTicket,
    liste: ListTickets
}

export default TicketRx;
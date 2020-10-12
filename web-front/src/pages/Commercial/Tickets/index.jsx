import React, {useEffect} from 'react'
import { Switch, Route } from "react-router-dom";
import TicketListe from "./TicketListe";
import NewTicket from "./New";
import axios from '../../../enabler/Axios'
import DetailsMiniCLient from "../Clients/details.mini";
import ClientRx from "../../../reducer/Clients";
import {connect} from 'react-redux'
import TicketRx from "../../../reducer/Ticket";


function TicketPage(props){
    useEffect(() => {
        props.getClientDetails()
        props.getTicketData()
    }, [])

    const action = (values) => {
        console.log("Forms", values);
        axios.get('/Test/GetAdminData')
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <React.Fragment>
            <Switch>
                <Route path="/commercial/ticket/nouveau/:clientId" exact>
                    <div className="col-md-8">
                        <NewTicket onSubmit={action} data={props.context}/>
                    </div>
                    <div className="col-md-4">
                        <DetailsMiniCLient client={props.client} />
                    </div>
                </Route>
                <Route path="/commercial/ticket/liste" exact >
                    <TicketListe />
                </Route>
            </Switch>
        </React.Fragment>
    )
}


const mapStateToProps = store =>  {
    return {
        client: store.clients.selected,
        context: store.tickets.context
    }
}

const getClientDetails = ClientRx.details;
const getTicketData = TicketRx.getNew;
const mapDispatchToProps = {
    getClientDetails, getTicketData
}
export default connect(mapStateToProps, mapDispatchToProps) (TicketPage)
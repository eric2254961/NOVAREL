import React from 'react'
import { Switch, Route } from "react-router-dom";
import TicketListe from "./TicketListe";
import {connect} from 'react-redux'
import TraiterTicket from "./TicketTraiter";
import TicketNouveau from "./TicketNouveau";

function TicketPage(props){

    return (
        <React.Fragment>
            <Switch>
                <Route path="/commercial/ticket/nouveau/:clientId" exact>
                    <TicketNouveau />
                </Route>
                <Route path="/commercial/ticket/liste" exact >
                    <TicketListe />
                </Route>
                <Route path="/commercial/ticket/:Reference/traiter" exact >
                    <TraiterTicket />
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

export default connect(mapStateToProps) (TicketPage)
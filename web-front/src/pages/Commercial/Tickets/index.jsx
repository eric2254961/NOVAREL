import React from 'react'
import { Switch, Route} from "react-router-dom";
import TicketListe from "./TicketListe";
import NewTicket from "./New";

function TicketPage(props){

    return (
        <React.Fragment>
            <Switch>
                <Route path="/commercial/ticket/nouveau" exact>
                    <NewTicket/>
                </Route>
                <Route path="/commercial/ticket/liste" exact >
                    <TicketListe />
                </Route>
            </Switch>
        </React.Fragment>
    )
}

export default TicketPage
import React from 'react'
import { Switch, Route} from "react-router-dom";
import TicketListe from "./TicketListe";

function TicketPage(props){

    return (
        <Switch>
            <Route path="/commercial/tickets" exact >
                <TicketListe />
            </Route>
            <Route path="/commercial/nouveau" exact>
                <p>Page nouveau ticket de reclamation</p>
            </Route>
        </Switch>
    )
}

export default TicketPage
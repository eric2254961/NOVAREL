import React from 'react'
import { Switch, Route} from "react-router-dom";
import TicketListe from "./TicketListe";
import NewTicket from "./New";
import axios from '../../../enabler/Axios'

function TicketPage(props){
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
                    <NewTicket onSubmit={action}/>
                </Route>
                <Route path="/commercial/ticket/liste" exact >
                    <TicketListe />
                </Route>
            </Switch>
        </React.Fragment>
    )
}

export default TicketPage
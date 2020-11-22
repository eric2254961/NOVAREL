import React from "react";
import {Route, Switch} from "react-router-dom";
import {connect} from 'react-redux'
import RechercheClient from "./recherche";
import ClientDetails from "./ClientDetails";

function ClientPage(props){

    return (
        <React.Fragment>
            <Switch>
                <Route path="/commercial/client/recherche" exact>
                    <RechercheClient />
                </Route>                
                <Route path="/commercial/client/:clientId/details" exact>
                    <ClientDetails />
                </Route>
            </Switch>
        </React.Fragment>
    )
}

export default ClientPage;
import React,{useEffect} from "react";
import {Route, Switch} from "react-router-dom";
import { useLocation } from "react-router-dom";
import {connect} from 'react-redux'
import * as ClientRx from "../../../reducer/Clients";
import RechercheClient from "./recherche";

function ClientPage(props){

    let query = new URLSearchParams(useLocation().search).get("s")

    useEffect(()=> {
        props.searchClient(query);
    },[query])

    return (
        <React.Fragment>
            <Switch>
                <Route path="/commercial/client/recherche" exact>
                    <RechercheClient motcle={query} items={props.clients} />
                </Route>
            </Switch>
        </React.Fragment>
    )
}

const mapStateToProps = store =>  {
    return {
        clients : store.clients.liste
    }
}

const searchClient = ClientRx.searchClient;
const mapDispatchToProps = {
    searchClient
}

export default connect(mapStateToProps, mapDispatchToProps)(ClientPage);
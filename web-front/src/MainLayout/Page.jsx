import React from 'react'
import {
  Switch,
  Route
} from "react-router-dom";
import Dashboard from '../pages/Dashboard';
import TicketPage from '../pages/Commercial/Tickets';
import TestComponnent from "../pages/Test";
import ClientPage from "../pages/Commercial/Clients";

function PageLayout(){

  return(
    <React.Fragment>
      <Switch>
        <Route exact path="/">
          <Dashboard/>
        </Route>
        <Route path="/commercial/client">
          <ClientPage />
        </Route>
        <Route path="/commercial/ticket">
          <TicketPage />
        </Route>
        <Route path="/viabilite">
          <h2>Page de la viabilité en construction</h2>
        </Route>
        <Route path="/test/componnent">
          <TestComponnent />
        </Route>
      </Switch>
    </React.Fragment>
  )
}

export default PageLayout;
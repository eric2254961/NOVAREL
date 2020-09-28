import React from 'react'
import {
  Switch,
  Route
} from "react-router-dom";
import Dashboard from '../pages/Dashboard';
import TicketPage from '../pages/Commercial/Tickets';

function PageLayout(){

  return(
    <React.Fragment>
      <Switch>
        <Route exact path="/">
          <Dashboard/>
        </Route>
        <Route path="/commercial/ticket">
          <TicketPage />
        </Route>
        <Route path="/viabilite">
          <h2>Page de la viabilité en construction</h2>
        </Route>
      </Switch>
    </React.Fragment>
  )
}

export default PageLayout;
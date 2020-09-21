import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from "react-router-dom";
import PropsType from 'prop-types'
import Authenticator from './Auth/'
import MainLayout from './MainLayout'
import ExternalRedirect from './Auth/ExternalRedirect'
import {connect} from 'react-redux'

function App(props) {

  let location = useLocation();
  
  console.log("User is connected ? : ",props.user.isConnected)
  console.log("##1",props.user.isConnected)
  console.log("##2",!props.user.isConnected && location.pathname === "/callback")

  let isAuthicated = props.user.isConnected || (!props.user.isConnected && location.pathname === "/callback")

  return (
    <div className="App">
      {isAuthicated &&
      <Router>
        <Switch>
          <Route exact path="/callback">
            <Authenticator />
          </Route>
          <Route path="/">
            <MainLayout/>
          </Route>
        </Switch>
      </Router>}

      {!isAuthicated && <ExternalRedirect to={props.loginUrl} />}
    </div>
  );
}
App.propsType = {
  loginUrl: PropsType.string.isRequired
}

const mapStateToProps = store => {
  return {
    user: store.user
  }
}

export default connect(mapStateToProps) (App);
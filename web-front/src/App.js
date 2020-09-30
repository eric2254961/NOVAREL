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
import AuthRedirect from './Auth/AuthRedirect'
import {connect} from 'react-redux'

function App(props) {

  let location = useLocation();

  let isAuthicated = props.user.isConnected || (!props.user.isConnected && location.pathname === "/callback")

  if(!isAuthicated){
    //TODO : Authentifier le token s'il existe
    isAuthicated = true;
  }

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

      {!isAuthicated && <AuthRedirect to={props.loginUrl} />}
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
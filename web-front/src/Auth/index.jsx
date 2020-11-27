import React from 'react'
import { useLocation, useHistory } from "react-router-dom";
import Auth from '../reducer/Auth'
import {connect} from 'react-redux'

function Authenticator (props){

  let history = useHistory();

  let query = useQuery();
  let token = query.get("token")
  if(token == null){
    document.location.href = props.loginUrl;
  }

  localStorage.setItem("NVL_TK",query.get("token"));
  props.handleLogin(JSON.parse(query.get("user")));

  history.push("/");
  
  return (<p>Loading...</p>);
}

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const mapDispatchToProps = {
  handleLogin : Auth.handleLogin
}

const mapStateToProps = store => {
  return {
    user: store.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Authenticator);
import React from 'react'
import {NavLink} from "react-router-dom";

export default function MenuLayout(){
  return (<React.Fragment>
    <div className="sidebar" data-color="green" data-background-color="white">
      <div className="logo">
        <a href="./" className="simple-text logo-normal">NOVAREL</a>
      </div>
      <div className="sidebar-wrapper">
        <ul className="nav">
          <li className="nav-item active  ">
            <NavLink className="nav-link" to="/" exact>
              <i className="material-icons">dashboard</i>
              <p>Dashboard</p>
            </NavLink>
          </li>
          <li className="nav-item ">
            <NavLink className="nav-link" to="/commercial/ticket/liste" exact>
              <i className="material-icons">description</i>
              <p>Tickets</p>
            </NavLink>
          </li>
          <li className="nav-item ">
            <NavLink className="nav-link" to="/viabilite">
              <i className="material-icons">new_releases</i>
              <p>Accidents</p>
            </NavLink>
          </li>
          
          <li className="nav-item active-pro ">
            <a className="nav-link" href="./upgrade.html">
              <i className="material-icons">unarchive</i>
              <p>Upgrade to PRO</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
    </React.Fragment>
  )
}
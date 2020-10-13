import React from 'react'
import {Link} from 'react-router-dom'
import Search from "../components/Search";
import LoadingBar from "../components/Loading";

export default function TopLayout(){
  return (
  <React.Fragment>
    <nav className="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
      <div className="container-fluid">
        <div className="navbar-wrapper">
          <Link className="navbar-brand" to="/">Dashboard</Link>
        </div>
        <Search />
        <div className="collapse navbar-collapse justify-content-end">        
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <Link className="nav-link" to="#" id="navbarDropdownProfile" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="material-icons">person</i>
                <p className="d-lg-none d-md-block"> Account 2 </p>
              </Link>
              <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownProfile">
                <Link className="dropdown-item" to="#">Profile</Link>
                <Link className="dropdown-item" to="#">Settings</Link>
                <div className="dropdown-divider" />
                <Link className="dropdown-item" to="#">Log out</Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <LoadingBar />
  </React.Fragment>
  )
}
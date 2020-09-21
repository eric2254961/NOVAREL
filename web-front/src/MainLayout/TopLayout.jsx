import React from 'react'
import {Link} from 'react-router-dom'

export default function TopLayout(){
  return (
  <React.Fragment>
    <nav className="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
      <div className="container-fluid">
        <div className="navbar-wrapper">
          <Link className="navbar-brand" to="#">Dashboard</Link>
        </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
          <span className="sr-only">Toggle navigation</span>
          <span className="navbar-toggler-icon icon-bar"></span>
          <span className="navbar-toggler-icon icon-bar"></span>
          <span className="navbar-toggler-icon icon-bar"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end">        
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="#">
                <i className="material-icons">dashboard</i>
                <p className="d-lg-none d-md-block"> Stats </p>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link" to="#" id="navbarDropdownProfile" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="material-icons">person</i>
                <p className="d-lg-none d-md-block"> Account 2 </p>
              </Link>
              <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownProfile">
                <Link className="dropdown-item" to="#">Profile</Link>
                <Link className="dropdown-item" to="#">Settings</Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="#">Log out</Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </React.Fragment>
  )
}
import React from 'react' 
import MenuLayout from './MenuLayout'
import TopLayout from './TopLayout'
import PageLayout from './Page'
import Notification from '../components/Notification'


export default function MainLayout(){
  
    return (<React.Fragment>
      <div className="wrapper">
        <MenuLayout />
        <div className="main-panel">
          <TopLayout />
          <div className="content">
            <div className="container-fluid">
              <div className="row">
                <Notification />
                <PageLayout/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>)
  }
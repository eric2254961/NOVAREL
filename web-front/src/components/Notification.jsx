import React from 'react'
import {connect} from 'react-redux'
import NotificationRx from '../reducer/Notification'
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

const timeout = 5000;

class Notification extends React.Component{

  createNotification = (type, message) => {
    return () => {
      switch (type) {
        case NotificationRx.type.INFO:
          NotificationManager.info(message, "Information", timeout);
          break;
        case NotificationRx.type.SUCCESS:
          NotificationManager.success(message, "Succès", timeout);
          break;
        case NotificationRx.type.WARNING:
          NotificationManager.warning(message, "Attention", timeout);
          break;
        case NotificationRx.type.ERROR:
          NotificationManager.error(message, "Erreur", timeout, () => {
            alert('callback');
          });
          break;
        default :
          //;
      }
    };
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return  !this.props.notification.show === nextProps.notification.show
  }

  render(){
    return <NotificationContainer />
  }

  componentDidMount() {
    if(this.props.notification.show){
      {
        this.createNotification(this.props.notification.type, this.props.notification.message)()
        this.props.hide();
      }

    }
  }
}

const show = NotificationRx.show
const hide = NotificationRx.hide

const mapDispatchToProps = {
  show, hide
}

const mapStateToProps = store => {
  return {
    notification: store.notification
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Notification)
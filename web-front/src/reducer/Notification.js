const NOTIFICATION_SHOW = "NOTIFICATION_SHOW";
const NOTIFICATION_HIDE = "NOTIFICATION_HIDE";

export function showNotification(typeNotification, message){
  return (dispatch) => {
    dispatch({
      type: NOTIFICATION_SHOW,
      payload: {
        message: message,
        type: typeNotification
      }
    })
  }
}

export function hideNotification(){
  return (dispatch) => {
    dispatch({
      type: NOTIFICATION_HIDE,
      payload: null
    })
  }
}

export class NotificationType{
  static INFO = "info"
  static SUCCESS = "success"
  static WARNING = "warning"
  static ERROR = "danger"
}

const initialState = { show: true, type: NotificationType.SUCCESS , message:"Bienvenue"};
export const reducer = (state = initialState, action) => {
  switch(action.type){
    case NOTIFICATION_SHOW :
      return {
        show: true,
        type: action.payload.type,
        message: action.payload.message
      }
    case NOTIFICATION_HIDE :
        return {
          show: false,
          type: NotificationType.INFO,
          message: null
        }
    default :
      return {...state}
  }
}

const NotificationRx = {
  show: showNotification,
  hide: hideNotification,
  reducer: reducer,
  type: NotificationType,
}

export default NotificationRx;
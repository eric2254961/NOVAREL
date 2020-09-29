import { useLocation } from "react-router-dom";
import PropsType from 'prop-types'

function AuthRedirect(props){
  document.location.href = props.to
  return null;
} 

AuthRedirect.prototype = {
  to: PropsType.string.isRequired
}

export default AuthRedirect
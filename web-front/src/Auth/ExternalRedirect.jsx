import { useLocation } from "react-router-dom";
import PropsType from 'prop-types'

function ExternalRedirect(props){
  document.location.href = props.to
  return null;
} 

ExternalRedirect.prototype = {
  to: PropsType.string.isRequired
}

export default ExternalRedirect
import React, {useEffect} from "react";
import NewTicket from "./New";
import DetailsMiniCLient from "../Clients/details.mini";
import {useParams} from "react-router-dom";
import ClientRx from "../../../reducer/Clients";
import axios from "../../../enabler/Axios";
import TicketRx from "../../../reducer/Ticket";
import {connect} from "react-redux";

function TicketNouveau(props){

  let { clientId } = useParams();

  useEffect(() => {
    props.getTicketData(clientId)
  }, [])

  const action = (values) => {
    console.log("Forms", values);
    axios.get('/Test/GetAdminData')
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <React.Fragment>
      <div className="col-md-8">
        <NewTicket onSubmit={action} data={props.context}/>
      </div>
      <div className="col-md-4">
        <DetailsMiniCLient client={props.client} />
      </div>
    </React.Fragment>
  )
}

const getClientDetails = ClientRx.details;
const mapStateToProps = store =>  {
  return {
    client: store.clients.selected,
    context: store.tickets.context
  }
}

const getTicketData = TicketRx.getNew;
const mapDispatchToProps = {
  getClientDetails, getTicketData
}
export default connect(mapStateToProps, mapDispatchToProps) (TicketNouveau)
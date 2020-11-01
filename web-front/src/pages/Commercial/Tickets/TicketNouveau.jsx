import React, {useEffect} from "react";
import NewTicket from "./New";
import DetailsMiniCLient from "../Clients/details.mini";
import {useParams} from "react-router-dom";
import TicketRx from "../../../reducer/Ticket";
import {connect} from "react-redux";

function TicketNouveau(props){

  let { clientId } = useParams();

  useEffect(() => {
    props.getTicketData(clientId)
  }, [])

  return (
    <React.Fragment>
      <div className="col-md-8">
        <NewTicket asyncValidate={props.validateTicket} onSubmit={props.addTicketNew} data={props.context}/>
      </div>
      <div className="col-md-4">
        <DetailsMiniCLient client={props.client} />
      </div>
    </React.Fragment>
  )
}

const mapStateToProps = store =>  {
  return {
    client: store.clients.selected,
    context: store.tickets.context
  }
}

const getTicketData = TicketRx.getNew;
const addTicketNew  = TicketRx.addNew;
const validateTicket = TicketRx.validator

const mapDispatchToProps = {
  addTicketNew, getTicketData, validateTicket
}

export default connect(mapStateToProps, mapDispatchToProps) (TicketNouveau)
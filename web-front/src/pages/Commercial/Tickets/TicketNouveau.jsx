import React, {useEffect, useState} from "react";
import NewTicket from "./component/New";
import DetailsMiniCLient from "../Clients/details.mini";
import {Redirect, useParams} from "react-router-dom";
import TicketRx from "../../../reducer/Ticket";
import {connect} from "react-redux";

function TicketNouveau(props){

  let { clientId } = useParams();
  let [urlSuccess, setUrlSuccess] = useState("")

  useEffect(() => {
    props.getTicketData(clientId)
  }, [])

  let handleSubmit = (values) => {
    let redirectUrl = props.addTicketNew(values);
    redirectUrl.then((url) => {
      setUrlSuccess(url);
    });
  }

  let datetime = new Date();
  let mois = (datetime.getMonth()+1) > 9 ? (datetime.getMonth()+1) : "0"+ (datetime.getMonth()+1);
  let jour = datetime.getDate() > 9 ? datetime.getDate() : "0"+datetime.getDate();
  let heure = datetime.getHours() > 9 ? datetime.getHours() : "0"+datetime.getHours();
  let minute = datetime.getMinutes() > 9 ? datetime.getMinutes() : "0"+datetime.getMinutes();

  let initialValues = {clientGeaId: clientId, datetime: jour+"/"+mois+"/"+datetime.getFullYear()+" "+heure+":"+minute}

  return (
    <React.Fragment>
    {urlSuccess === "" ? 
      <React.Fragment>
        <div className="col-md-8">
          <NewTicket initialValues={initialValues} onSubmit={handleSubmit} data={props.context}/>
        </div>
        <div className="col-md-4">
          <DetailsMiniCLient client={props.client} />
        </div>
      </React.Fragment> :
      <Redirect to={urlSuccess} />
    }
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

const mapDispatchToProps = {
  addTicketNew, getTicketData
}

export default connect(mapStateToProps, mapDispatchToProps) (TicketNouveau)
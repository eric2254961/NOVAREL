import React, {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import TicketRx from "../../../reducer/Ticket";
import {connect} from "react-redux";
import ParseDate from '../../../components/ParseDate';

function TraiterTicket(props){

    let { Reference } = useParams();
    useEffect(() => {
       props.getTicketDetails(Reference)
    }, [])

    let {context:{Ticket}} = props

    return(
        Ticket !== null &&
        <React.Fragment>
            <div className="col-md-9">                 
                <div className="card card-stats">
                    <div className="card-header">
                        <h4 className="card-title">Ticket: <b>{Reference}</b></h4>
                        <hr />            
                    </div>
                    <div class="card-body">
                        <div>
                            <span className="material-icons">calendar_today</span>
                            <span className="text-icon"><ParseDate value={props.context.Ticket.DateOuverture} /></span>
                                
                            <span className="material-icons">perm_identity</span>
                            <span className="text-icon">User Text</span>
                            <span className={`ticket-status ${Ticket.IsCloture? 'ticket-cloture':'ticket-encours' }`}> </span>
                        </div>

                    </div>
                    <div class="card-footer">
                        <hr/>
                        <ActionTraitement />
                    </div>
                </div>
            </div>

            <div className="col-md-3">
            </div>            
        </React.Fragment>
    )
}

function ActionTraitement(){
    return (
        <React.Fragment>
            <div className="stats">
                <i className="material-icons text-info">chat</i>
                <a className="text-info" href="javascript:void(0);">Traiter</a>
            </div>
            <div className="stats">
                <i className="material-icons text-warning">arrow_forward</i>
                <a className="text-warning" href="javascript:void(0);">Transférer</a>
            </div>
            <div className="stats">
                <i className="material-icons text-muted">edit</i>
                <a className="text-muted" href="javascript:void(0);">Modifier</a>
            </div>
            <div className="stats">
                <i className="material-icons text-success">done</i>
                <a className="text-success" href="javascript:void(0);">Clôturer</a>
            </div>
        </React.Fragment>
    )

}

const mapStateToProps = store =>  {
    return {
        context: store.tickets.details
    }
}
const getTicketDetails = TicketRx.details;
const addActionTicket  = TicketRx.addAction;

const mapDispatchToProps = {
    getTicketDetails, addActionTicket
}

export default connect(mapStateToProps, mapDispatchToProps) (TraiterTicket)
import React, {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import TicketRx from "../../../reducer/Ticket";
import {connect} from "react-redux";

function TraiterTicket(props){

    let { Reference } = useParams();
    useEffect(() => {
        props.getTicketDetails(Reference)
    }, [])

    return(
        <React.Fragment>           
            <div className="col-md-9">                 
                <div className="card card-stats">
                    <div className="card-header">
                        <h4 className="card-title">Ticket: <b>{Reference}</b></h4>        
                        <hr />            
                    </div>
                    <div class="card-body">
                        
                    </div>
                    <div class="card-footer">
                        <hr/>
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
                    </div>
                </div>
            </div>

            <div className="col-md-3">
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
const getTicketDetails = TicketRx.details;
const addActionTicket  = TicketRx.addAction;

const mapDispatchToProps = {
    getTicketDetails, addActionTicket
}

export default connect(mapStateToProps, mapDispatchToProps) (TraiterTicket)
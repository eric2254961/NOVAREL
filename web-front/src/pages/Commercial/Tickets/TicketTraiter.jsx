import React, {useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import TicketRx from "../../../reducer/Ticket";
import {connect} from "react-redux";
import ParseDate from '../../../components/ParseDate';
import Moment from 'react-moment';
import 'moment/locale/fr';
import ActionTicket from './component/NewActionTicket';
import { Icon } from '@material-ui/core';

function TraiterTicket(props){

    let { Reference } = useParams();
    useEffect(() => {
        props.getTicketDetails(Reference)
    }, [])

    let {context:{Ticket, Objets, Client}} = props
    
    return(
        Ticket !== null &&
        <React.Fragment>
            <div className="col-md-12">                 
                <div className="card card-stats">
                    <div className="card-header">
                        <h4 className="card-title">Ticket: <b>{Reference}</b></h4>
                        <hr />            
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-9">
                                <div className="row">
                                    <div className="col-md-2 text-right">
                                        <span>Client : </span>
                                    </div>
                                    <div className="col-md-10">
                                        <span className="client-infos">
                                            <Link to={`/commercial/client/${Client.IDENTITY}/details`}> <b>{Client.NAME} {Client.FNAME} {Client.CNAME}</b> </Link>
                                        </span>
                                    </div>
                                    <div className="col-md-2 text-right">
                                        <span>Ouverture :</span>
                                    </div>
                                    <div className="col-md-10">
                                        <span className="client-infos">{Ticket.ModeOuverture.Libelle}</span>
                                    </div>
                                    <div className="col-md-2 text-right">
                                        <span>Localisation :</span>
                                    </div>
                                    <div className="col-md-10">
                                        <span className="client-infos">{Ticket.Emplacement.Zone.Libelle} - {Ticket.Emplacement.Libelle}</span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-2 text-right">
                                        <span>Objets :</span>
                                    </div>
                                    <div className="col-md-10">
                                        <span className="client-infos">
                                            {Objets.map((item, k)=>{
                                                return( <span key={k}> {item.Libelle} - </span> )
                                            })} 
                                        </span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-2 text-right">
                                        <span>Vehicule :</span>
                                    </div>
                                    <div className="col-md-10">
                                        <span className="client-infos">{Ticket.Marque} {Ticket.Modele} {Ticket.Immatriculation}</span>
                                    </div>
                                </div>
                                <div className="row">
                                <div className="col-md-2 text-right">
                                    <span>Date des faits :</span>
                                </div>
                                <div className="col-md-10">
                                    <span className="client-infos"><ParseDate value={props.context.Ticket.DateFait} /></span>
                                </div>
                            </div>
                            </div>
                            <div className="col-md-3">
                                <TicketInfos ticket={Ticket}/>
                            </div>
                        </div>
                        <br/>
                        <h4>Description</h4>
                        <hr/>
                        <div className="row">
                            <div className="col-md-12">
                                <span className="client-infos">{Ticket.Description}</span>
                            </div>
                        </div> 
                    </div>
                    <div className="card-footer">
                        <hr/>
                        <ActionTraitement reference={Ticket.Reference} />
                    </div>
                </div>
            </div>
            
            <ActionsListe actions={Ticket.Actions}/>
        </React.Fragment>
    )
}

function ActionsListe(props){
    let {actions} = props
    return (
        <div className="col-md-12">
            {actions.map((item, k) => {
                return <ActionCard data={item} key={k} />
            })}
        </div>
    )
}

function ActionCard(props){
    const { data } = props
    return (
        <div className="action-card">
            <div className="action-content">
                <div className="action-description">{data.Commentaire}</div>
                <div className="action-meta">
                    <Icon className="material-icons">person</Icon>
                    <span className="action-author">{data.Utilisateur.Name}</span>
                    <span className="action-date">
                        <Moment parse="YYYY-MM-DDTHH:mm" fromNow>{data.DateAction}</Moment>
                    </span>
                </div>
            </div>
        </div>
    )
}

function TicketInfos(props){
    let { ticket } = props

    return (
        <React.Fragment>
            <div className="meta">
                <div>
                    <span className="material-icons">calendar_today</span>
                    <span className="text-icon"><ParseDate value={ticket.DateOuverture} /></span> 
                </div>
                <div>
                    <span className="material-icons">perm_identity</span>
                    <span className="text-icon">{ticket.Utilisateur.Name}</span>
                </div>   
                <div>
                    <span className="text-icon">Statut</span>
                    <span className={`ticket-status ${ticket.IsCloture? 'ticket-cloture':'ticket-encours' }`}> </span>
                </div>
            </div>
            <Moment parse="YYYY-MM-DDTHH:mm" fromNow>${ticket.IsCloture? 'Ouvert' : 'Clôturé'} depuis {ticket.DateOuverture} </Moment>
        </React.Fragment>
    )
}

function ActionTraitement(props){

    const {reference} = props
    return (
        <React.Fragment>
            <ActionTicket reference={reference}/>
            <div className="stats">
                <i className="material-icons text-warning">arrow_forward</i>
                <a className="text-warning" href="#1">Transférer</a>
            </div>
            <div className="stats">
                <i className="material-icons text-muted">edit</i>
                <a className="text-muted" href="#1">Modifier</a>
            </div>
            <div className="stats">
                <i className="material-icons text-success">done</i>
                <a className="text-success" href="#1">Clôturer</a>
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
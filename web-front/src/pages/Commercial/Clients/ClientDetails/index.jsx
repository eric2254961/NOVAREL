import React,{ useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router';
import ClientRx from '../../../../reducer/Clients'
import TicketListMini from '../../Tickets/component/ListTicket.Mini';
import CustomerDetails from './CustomerDetails';
import CustomerSubscription from './CustomerSubscription';

function ClientDetails(props){
  
  let { clientId } = useParams();
  let {client: {Details, Tickets} } = props
  
  useEffect(() => {
    props.getDetails(clientId)
  }, [])

  return (
    (Details !== null &&
    <React.Fragment>
      <div className="col-md-12">
        <div className="card">
          <div className="card-header card-header-tabs card-header-success">
            <div className="nav-tabs-navigation">
              <div className="nav-tabs-wrapper">
                <ul className="nav nav-tabs" data-tabs="tabs">
                  <li className="nav-item">
                    <a className="nav-link active" href="#client" data-toggle="tab">
                      <i className="material-icons">account_box</i> Client
                      <div className="ripple-container"></div>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#tickets" data-toggle="tab">
                      <i className="material-icons">receipt</i> Tickets
                      <div className="ripple-container"></div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="tab-content">
              <div className="tab-pane active" id="client">
                <h4>Client</h4>
                <hr />
                <CustomerDetails client={Details} />
                <br/>
                <h4>Abonnements</h4>
                <hr/>
                <CustomerSubscription 
                  abonnements={Details.SUBSCRIPTIONS} 
                  getHistorique={props.getHisto} 
                  historiques={props.historique}
                />
              </div>
              <div className="tab-pane" id="tickets">
                <TicketListMini tickets={Tickets} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>)
  )
}

const getDetails = ClientRx.detailsAndTickets
const getHisto = ClientRx.historique

const mapDispatchToProps = {
  getDetails, getHisto
}
const mapStateToProps = store => {
  return {
    client: store.clients.selected,
    historique: store.clients.historique
  }
}
export default connect(mapStateToProps, mapDispatchToProps) (ClientDetails);


export function getStatusToString(statut){
  switch(statut){
    case '0' : return 'Pré-créé';
    case '1' : return 'Actif';
    case '2' : return 'Suspendu'
    case '3' : return 'En liste noire'
    case '4' : return 'Clôturé'
    default : return 'Statut non défini'
  }
}

export function getTypeToString(type){
  if(type === '1'){
    return "Entreprise"
  }else if(type === '2'){
    return "Particulier"
  }else{
    return "Type inconnu"
  }
}

export function getTypeCardToString(type){
  switch(type){
    case '1' : return 'CNI'
    case '2' : return 'Permis de conduire'
    case '3' : return 'Passeport'
    case '4' : return 'Autre'
    default : return "Type de pièce d'indentité inconnu"
  }
}
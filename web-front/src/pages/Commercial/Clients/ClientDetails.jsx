import { MenuItem, TextField } from '@material-ui/core';
import React,{ useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router';
import ClientRx from '../../../reducer/Clients'

function ClientDetails(props)
{
  
  let { clientId } = useParams();
  
  useEffect(() => {
    props.getDetails(clientId)
  }, [])

  return (
    (props.client !== null &&
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
                <CustomerDetails client={props.client} />
                <br/>
                <h4>Abonnements</h4>
                <hr/>
                <CustomerSubscription abonnements={props.client.SUBSCRIPTIONS} />
              </div>
              <d className="tab-pane" id="tickets">
                <table className="table">
                  <tbody>
                    <tr>
                      <td>
                        <div className="form-check">
                          <label className="form-check-label">
                            <span className="form-check-sign">
                              <span className="check"></span>
                            </span>
                          </label>
                        </div>
                      </td>
                      <td>Lines From Great Russian Literature? Or E-mails From My Boss?</td>
                      <td className="td-actions text-right">
                        <button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-link btn-sm">
                          <i className="material-icons">edit</i>
                        </button>
                        <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-link btn-sm">
                          <i className="material-icons">close</i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check">
                          <label className="form-check-label">
                            <span className="form-check-sign">
                              <span className="check"></span>
                            </span>
                          </label>
                        </div>
                      </td>
                      <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit
                      </td>
                      <td className="td-actions text-right">
                        <button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-link btn-sm">
                          <i className="material-icons">edit</i>
                        </button>
                        <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-link btn-sm">
                          <i className="material-icons">close</i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check">
                          <label className="form-check-label">
                            <span className="form-check-sign">
                              <span className="check"></span>
                            </span>
                          </label>
                        </div>
                      </td>
                      <td>Sign contract for "What are conference organizers afraid of?"</td>
                      <td className="td-actions text-right">
                        <button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-link btn-sm">
                          <i className="material-icons">edit</i>
                        </button>
                        <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-link btn-sm">
                          <i className="material-icons">close</i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </d>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>)
  )
}

function CustomerDetails (props){
  const {client} = props 

  return (
    <React.Fragment>
      <div className="row">
        <div className="col-md-2 text-right">
          <span>ID Client</span>
        </div>
        <div className="col-md-4">
          <span className="client-infos">{client.IDENTITY}</span>
        </div>
        <div className="col-md-2 text-right">
          <span>Type client</span>
        </div>
        <div className="col-md-4">
          <span className="client-infos">{getTypeToString(client.TYPE)}</span>
        </div>
        <div className="col-md-2 text-right">
          <span>Statut</span> 
        </div>
        <div className="col-md-4">  
          <span className="client-infos">{getStatusToString(client.STATUS)}</span>
        </div>
      </div>

      <div className="row">
        <div className="col-md-2 text-right">
        <span>Nom complet</span>
        </div>
        <div className="col-md-10">
          <span className="client-infos">{client.NAME} {client.FNAME} {client.CNAME}</span>
        </div>
      </div>
      <div className="row">
        <div className="col-md-2 text-right">
          <span>Adresse</span>
        </div>
        <div className="col-md-10">
          <span className="client-infos">{client.ADDR_L1} {client.ADDR_L2} {client.ADDR_L3} </span>
        </div>
      </div>

      <div className="row">
        <div className="col-md-2 text-right">
          <span>Pays</span>
        </div>
        <div className="col-md-4">
          <span className="client-infos">{client.COUNTRY}</span>
        </div>
        <div className="col-md-2 text-right">
          <span>Ville (Code Postal)</span>
        </div>
        <div className="col-md-4">
          <span className="client-infos">{client.TOWN} ({client.POSTCOD})</span>
        </div>
      </div>

      <div className="row">
        <div className="col-md-2 text-right">
          <span>Pièce d'identité</span>
        </div>
        <div className="col-md-4">
          <span className="client-infos">{getTypeCardToString(client.ID_CARD_TYPE)} - n° {client.ID_CARD_NUMBER} </span>
        </div>
        <div className="col-md-2 text-right">
          <span>Email</span>
        </div>
        <div className="col-md-4">
          <span className="client-infos">{client.EMAIL}</span> 
        </div>
      </div>

      <div className="row">
        <div className="col-md-2 text-right">
          <span>Téléphone</span>
        </div>
        <div className="col-md-4">  
          <span className="client-infos">{client.PHONE_1} / {client.PHONE_2}</span>
        </div>
        <div className="col-md-2 text-right">
          <span>Fax</span>
        </div>
        <div className="col-md-4">
          <span className="client-infos">{client.FAX}</span> 
        </div>
      </div>
    </React.Fragment>
  )
}

function CustomerSubscription(props){

  let {abonnements} = props
  let [abonnementActif, setAbonnementActif] = useState(0)

  return (
    <React.Fragment>
      <div className="row">
        <div className="col-md-2 text-right">
          <span>Abonnement</span>
        </div>
        <div className="col-md-8">
          <TextField
            onChange={(event) => {setAbonnementActif(event.target.value)} }
            select
            fullWidth
            defaultValue={0}
          >
            {abonnements.map((item,k) => { return <MenuItem key={k} value={k}>{item.SUBS_ID}</MenuItem> })}
          </TextField>
        </div>
        <div className="col-md-2"></div>
      </div>
      <br/>
      <div className="row">
        <div className="col-md-12">
          <table className="table">
          <thead>
            <tr>
              <th>N° badge</th>
              <th>Type</th>
              <th>Statut</th>
              <th>Dernière Modification</th>
            </tr>
          </thead>
          <tbody>
          {abonnements[abonnementActif].TAGS.map((item,k) => {
            return (
            <tr key={k}>
              <td>{item.TAG_ID}</td>
              <td>{item.TAG_TYPE === "9" ? "RFID " : "DSRC "}</td>
              <td>{getStatusToString(item.STATUS)}</td>
              {let dhms = new Date(2000,02,12,20,52)}
              <td>{item.LM_DHMS}</td>
            </tr>
            )
        })}          
          </tbody>
          </table>        
        </div>
      </div>
    </React.Fragment>
  )
}

//Date(year, month, day, hours, minutes, seconds, milliseconds)

const getDetails = ClientRx.details
const mapDispatchToProps = {
  getDetails
}
const mapStateToProps = store => {
  return {
    client: store.clients.selected
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
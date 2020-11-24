import React from 'react'
import { getStatusToString, getTypeCardToString, getTypeToString } from '.';

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

export default CustomerDetails;
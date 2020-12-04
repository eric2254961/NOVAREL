import { MenuItem, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import { getStatusToString } from '.'
import HistoriqueDialog from './HistoriqueDialog'

function CustomerSubscription(props){

  let {abonnements, historiques} = props
  let [abonnementActif, setAbonnementActif] = useState(0)
  console.log("Abonnement",abonnements.length)
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-md-2 text-right">
          <span>Abonnement</span>
        </div>
        <div className="col-md-4">
          <TextField
            onChange={(event) => {setAbonnementActif(event.target.value)} }
            select
            fullWidth
            defaultValue={0}
          >
            {abonnements.map((item,k) => { return <MenuItem key={k} value={k}>{item.SUBS_ID}</MenuItem> })}
          </TextField>
        </div>
        <div className="col-md-1">Solde :</div>
        <div className="col-md-3"><b>{abonnements[abonnementActif].SOLDE}</b> Fcfa</div>
        <div className="col-md-2">
          {abonnements.length > 0  &&
          <HistoriqueDialog 
            abonnementId={abonnements[abonnementActif].SUBS_ID} 
            getHistorique={props.getHistorique} 
            historiques={historiques}
          />}
        </div>
      </div>
      <br/>
      <div className="row">
        <div className="col-md-12">
        { abonnements.length > 0 && 
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
              <td>{item.LM_DHMS}</td>
            </tr>
            )
        })}          
          </tbody>
          </table> }       
        </div>
      </div>
    </React.Fragment>
  )
}

export default CustomerSubscription
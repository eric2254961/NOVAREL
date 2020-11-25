import React from 'react'
import { Link } from 'react-router-dom'
import ParseDate from '../../../../components/ParseDate'

function TicketListMini(props){

  let {tickets} = props

  return (
    <table className="table">
      <thead>
        <tr>
          <th>N° ticket</th>
          <th>Date d'ouverture</th>
          <th>Objets</th>
          <th>Statut</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {tickets.map((item, k) => {
          return(
            <tr key={k}>
              <td>{item.Reference}</td>
              <td><ParseDate value={item.DateOuverture}/></td>
              <td>{item.ObjetTickets.map((item, k) => {
                return <span key={k}>{item.Objet.Libelle} - </span> 
              })}</td>
              <td><span className={`ticket-status ${item.IsCloture? 'ticket-cloture':'ticket-encours' }`}> </span></td>
              <td className="td-actions text-right">
                <button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-link btn-sm">
                  <Link to={`/commercial/ticket/${item.Reference}/traiter`}>
                    <i className="material-icons">edit </i>
                  </Link>
                </button>
              </td>
            </tr> )
        })}                   
      </tbody>
    </table>
  )
}

export default TicketListMini
import React from "react";
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

function TicketListe(props){
    //requete http ASP.Net
    const { data } = props
    return (
        <React.Fragment>
            <p>
                <Link to="/commercial/ticket/nouveau">Nouveau</Link>
            </p>
            <div className="col-md-12">
                <div className="card">
                <div className="card-header">
                    <h4 className="card-title ">Liste des tickets</h4>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table">
                            <thead className=" text-primary">
                                <tr>
                                    <th>Numéro</th>
                                    <th>Type</th>
                                    <th>Client</th>
                                    <th>Date</th>
                                    <th>Statut</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item,k)=>{
                                    return(
                                         <tr key={k}>
                                           <td>{item.Reference}</td>
                                           <td>{item.Type}</td>
                                           <td>{item.Client.Name}</td>
                                           <td>{item.Date}</td>
                                           <td>{item.Status}</td>
                                           <td>
                                                <Link to= {`/commercial/ticket/${item.Reference}/traiter`} >
                                                    Traiter
                                                </Link>
                                           </td>
                                        </tr>
                                    )
                                 })}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            </div>
        </React.Fragment>
    )
}

TicketListe.propTypes= {

   data: PropTypes.arrayOf(PropTypes.shape({
        Id: PropTypes.number,
        Reference: PropTypes.string,
        Type: PropTypes.string,
        Date: PropTypes.string,
        Status: PropTypes.string,
        Client: PropTypes.shape({
            Id: PropTypes.string,
          Name: PropTypes.string
            })
   }))

}
TicketListe.defaultProps = {
    data: [
        {
            Id: 1,
            Reference: 'Azert225',
            Type: 'Badge',
            Date:'13-10-2020',
            Status:'En cours',
            Client: { Id: 2, Name:'Ketty Nguessan' },
        },
        {
            Id: 2,
            Reference: 'Vincent2',
            Type: 'Test',
            Date:'10-08-2020',
            Status:'traité',
            Client: { Id: 3, Name:'Vincent Manou' },
        }
    ]
}
export default TicketListe;
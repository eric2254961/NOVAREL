import React, { useEffect } from "react";
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import TicketRx from "../../../reducer/Ticket"
import Moment from "react-moment";
import 'moment/locale/fr';

function TicketListe(props){
    
    useEffect( () => {
        props.getListe()
    }, [])

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
                                    <th>Référence</th>
                                    <th>ID client</th>
                                    <th>Mode</th>
                                    <th>Ouverture</th>
                                    <th>Emplacement</th>
                                    <th>Statut</th>
                                    <th>Ouvert par</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item,k)=>{
                                    return(
                                        <tr key={k}>
                                            <td>{item.Reference}</td>
                                            <td>{item.ClientId}</td>
                                            <td>{item.ModeOuverture.Libelle}</td>
                                            <td><Moment parse="YYYY-MM-DDTHH:mm" fromNow> {item.DateOuverture} </Moment></td>
                                            <td>{item.Emplacement.Libelle} ({item.Emplacement.Zone.Libelle})</td>
                                            <td>{item.Status ? 'Clôturé' : 'En cours'}</td>
                                            <td>{item.Utilisateur.Name}</td>
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

const getListe = TicketRx.liste;
const mapDispatchToProps = {
    getListe
}
const mapStateToProps = store => {
    return {
        data: store.tickets.liste
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (TicketListe);
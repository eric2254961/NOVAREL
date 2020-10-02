import React from "react";
import {Link} from "react-router-dom";

function RechercheClient(props){
    return(
        <div className="col-md-12">
            <div className="card">
                <div className="card-header">
                    <h4 className="card-title ">Clients commençant pas <b>"{props.motcle}"</b></h4>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table">
                            <thead className=" text-primary">
                            <tr>
                                <th>ID</th>
                                <th>Nom</th>
                                <th>Type</th>
                                <th>Contact</th>
                                <th>Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {props.items.map( item => {
                                return (
                                    <tr>
                                        <td>{item.IDENTITY}</td>
                                        <td>{item.NAME} {item.FNAME}</td>
                                        <td>{item.TYPE === "1" ? "Entreprise" : "Particulier"}</td>
                                        <td>{item.PHONE_1} / {item.PHONE_2}</td>
                                        <td className="text-primary">
                                            <Link to={`/commercial/ticket/nouveau/${item.IDENTITY}`} title="Fiche client">
                                                <i className="material-icons">preview</i>
                                            </Link>
                                            <Link to="" title="Ouvrir une réclamation">
                                                <i className="material-icons">note_add</i>
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
    )
}

export default RechercheClient;

/*
{props.items.map( item => {
                                return (
                                    <tr>
                                        <td>{item.IDENTITY}</td>
                                        <td>{item.NAME} {item.FNAME}</td>
                                        <td>{item.TYPE === "1" ? "Entreprise" : "Particulier"}</td>
                                        <td>{item.PHONE_1} / {item.PHONE_2}</td>
                                        <td className="text-primary">$36,738</td>
                                    </tr>
                                )
                            })}
 */
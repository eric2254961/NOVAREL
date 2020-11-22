import React,{ useEffect } from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import {Link} from "react-router-dom";
import * as ClientRx from "../../../reducer/Clients";

function RechercheClient(props){

    let query = new URLSearchParams(useLocation().search).get("s")

    useEffect(()=> {
        props.searchClient(query);
    },[query])

    return(
        (props.items.length > 0 &&
        <div className="col-md-12">
            <div className="card">
                <div className="card-header">
                    <h4 className="card-title ">Clients commençant pas <b>"{query}"</b></h4>
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
                                            <Link to={`/commercial/client/${item.IDENTITY}/details`} title="Fiche client">
                                                <i className="material-icons">preview</i>
                                            </Link>
                                            <Link to={`/commercial/ticket/nouveau/${item.IDENTITY}`} title="Ouvrir une plainte">
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
        </div>)
    )
}

const mapStateToProps = store =>  {
    return {
        items : store.clients.liste
    }
}

const searchClient = ClientRx.searchClient;
const mapDispatchToProps = {
    searchClient
}

export default connect(mapStateToProps, mapDispatchToProps)(RechercheClient);
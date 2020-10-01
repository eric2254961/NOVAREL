import React from "react";
import {Link} from 'react-router-dom'

function TicketListe(props){
    //requete http ASP.Net

    return (
        <React.Fragment>
            <p>
                <Link to="/commercial/ticket/nouveau">Nouveau</Link>
            </p>
            <div className="col-md-12">
                <div className="card">
                <div className="card-header card-header-primary">
                    <h4 className="card-title ">Simple Table</h4>
                    <p className="card-category"> Here is a subtitle for this table</p>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table">
                            <thead className=" text-primary">
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Country</th>
                                <th>City</th>
                                <th>Salary</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>1</td>
                                <td>Dakota Rice</td>
                                <td>Niger</td>
                                <td>Oud-Turnhout</td>
                                <td className="text-primary">$36,738</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Dakota Rice</td>
                                <td>Niger</td>
                                <td>Oud-Turnhout</td>
                                <td className="text-primary">$36,738</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Dakota Rice</td>
                                <td>Niger</td>
                                <td>Oud-Turnhout</td>
                                <td className="text-primary">$36,738</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Dakota Rice</td>
                                <td>Niger</td>
                                <td>Oud-Turnhout</td>
                                <td className="text-primary">$36,738</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            </div>
        </React.Fragment>
    )
}

export default TicketListe;
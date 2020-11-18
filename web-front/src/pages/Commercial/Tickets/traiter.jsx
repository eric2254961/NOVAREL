import React from 'react'

function TraiterTicket(props){

    return(
        <React.Fragment>
            <div class="card">
                <div className="row">
                <div className="col-md-2">
                <button type="button" className="btn btn-success pull-right">Traiter</button>
                </div>
                
                <div className="col-md-2">
                <button type="button" className="btn btn-success pull-right">Transférer</button>
                </div>
                
                <div className="col-md-2">
                <button type="button" className="btn btn-success pull-right">Modifier</button>
                </div>
                
                <div className="col-md-2">
                <button type="button" className="btn btn-success pull-right">Clôturer</button>
                </div>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Ticket: </h3>
                    <div class="card-toolbar">
                        <div class="example-tools justify-content-center">
                            <span class="example-toggle" data-toggle="tooltip" title="" data-original-title="View code"></span>
                            <span class="example-copy" data-toggle="tooltip" title="" data-original-title="Copy code"></span>
                        </div>
                    </div>
                    <form class="form">
                    <div class="card-body">
                        <div class="form-group row">
                            <div class="col-lg-4">
                                <label>Client:</label>
                                <input type="text" class="form-control" value="ClientName" readonly/>
                            </div>
                            <div class="col-lg-4">
                                <label>Badge:</label>
                                <input type="text" class="form-control" value="BadgeInfos" readonly/>
                            </div>
                            <div class="col-lg-4">
                                <label>Contacts:</label>
                                <input type="text" class="form-control" value="Contacts" readonly/>
                            </div>
                        </div>
                    <hr/>

                    <div class="form-group row">
                        <div class="col-lg-6">
                            <label>Créé par:</label>
                            <input type="text" class="form-control" value="ClientName" readonly/>
                        </div>
                        <div class="col-lg-6">
                            <label>Objet de la plainte:</label>
                            <input type="text" class="form-control" value="Contacts" readonly/>
                        </div>
                    </div>
                    <hr/>

                    <div class="form-group row">
                        <div class="col-lg-3">
                            <label>Date des faits:</label>
                            <input type="text" class="form-control" value="ClientName" readonly/>
                        </div>
                        <div class="col-lg-3">
                            <label>Mode d'ouverture:</label>
                            <input type="text" class="form-control" value="BadgeInfos" readonly/>
                        </div>
                        <div class="col-lg-3">
                            <label>Situation:</label>
                            <input type="text" class="form-control" value="Contacts" readonly/>
                        </div>
                        <div class="col-lg-3">
                            <label>Classification:</label>
                            <input type="text" class="form-control" value="Contacts" readonly/>
                        </div>
                    </div>

                        <div class="form-group row">
                            <div class="col-lg-12">
                                <label>Date des faits:</label>
                                <textarea class="form-control" value="ClientName" readonly/>
                            </div>
                        </div>
                    </div>

                    <div class="card">

                    </div>
                </form>
                </div>
            </div>
        </React.Fragment>
    )
}

export default TraiterTicket
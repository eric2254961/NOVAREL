import React from "react";
import InputField from "./form/Input";
import {Field} from "redux-form";

function VehiculeInfos(props){

    return (
        <React.Fragment>
            <div className="col-md-4">
                <Field name="immatriculation" component={InputField} label="Immatriculation"/>
            </div>
            <div className="col-md-4">
                <Field name="marque" component={InputField} label="Marque" />
            </div>
            <div className="col-md-4">
                <Field name="modele" component={InputField} label="Modèle" />
            </div>
        </React.Fragment>
    )
}

export default VehiculeInfos;
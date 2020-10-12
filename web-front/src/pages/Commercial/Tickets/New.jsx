import React from "react";
import {reduxForm, Field, Fields} from 'redux-form'
import InputField from "../../../components/form/Input";
import SelectField from "../../../components/form/Select";
import SubjectChoice from "../../../components/Subject";
import PropTypes from "prop-types";
import DateTime from "../../../components/DateTime";
import Sens from "../../../components/Sens"
import LocalisationInfos from "../../../components/LocalisationInfos";
import VehiculeInfos from "../../../components/VehiculeInfos";
import MultilineField from "../../../components/form/Multiline";

function NewTicket(props){

    const { handleSubmit, pristine, reset, submitting, data } = props

    return (
        <div className="card">
            <div className="card-header card-header-text">
                <h4 className="card-title">Nouveau ticket</h4>
            </div>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-4">
                            <Field component={DateTime} name="datetime" label="Date et heure des faits" showTime={true}/>
                        </div>
                        <div className="col-md-4">
                            <Field name="openMode" label="Mode d'ouverture" component={SelectField} data={data.openMode}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <Field name="firstName" label="First Name" component={InputField} type="text"/>
                        </div>
                        <div className="col-md-4">
                            <Field name="lastName" label="Last name" component={InputField} type="text"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <hr/>
                            <SubjectChoice data={data.subject} />
                        </div>
                    </div>
                    <hr/>
                    <h4>Localisation</h4>
                    <div className="row">
                        <div className="col-md-4">
                            <Field component={Sens} name="sens" />
                        </div>
                        <Fields names={['zone', 'emplacement',]} component={LocalisationInfos}/>
                    </div>

                    <hr/>
                    <h4>Véhicule</h4>
                    <div className="row">
                        <VehiculeInfos />
                    </div>

                    <hr/>
                    <h4>Description</h4>
                    <div className="row">
                        <div className="col-md-12">
                            <Field component={MultilineField} name="description" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="offset-md-1 col-md-2">
                            <button type="submit" className="btn btn-success pull-right btn-round">Valider</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

NewTicket.propTypes = {
    data: PropTypes.shape(
        {
            subject: PropTypes.array,
            openMode: PropTypes.array,
        }
    ).isRequired
}

NewTicket.defaultProps = {
    data: {
        subject: [],
        openMode: []
    }
}

export default reduxForm({
    form: 'newticket'
})(NewTicket)



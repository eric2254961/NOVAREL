import React from "react";
import {reduxForm, Field, Fields} from 'redux-form';
import SelectField from "../../../../components/form/Select";
import SubjectChoice from "../../../../components/Subject";
import PropTypes from "prop-types";
import DateTime from "../../../../components/DateTime";
import Sens from "../../../../components/Sens"
import LocalisationInfos from "../../../../components/LocalisationInfos";
import VehiculeInfos from "../../../../components/VehiculeInfos";
import MultilineField from "../../../../components/form/Multiline";
import TypeTicketComponent from "../../../../components/TypeTicket";

function NewTicket(props){

    const { handleSubmit, data: { Localisations } } = props
    
    return (
        <div className="card">
            <div className="card-header card-header-text">
                <h4 className="card-title">Nouveau ticket</h4>
            </div>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <Field name="clientGeaId" component="input" type="hidden" />
                        <div className="col-md-4">
                            <Field
                                normalize = {(value) => { return (value)}}
                                component={DateTime} name="datetime" label="Date et heure des faits" showTime={true}/>
                        </div>
                        <div className="col-md-4">
                            <Field name="openMode" label="Mode d'ouverture" component={SelectField} data={props.data.OpenModes}/>
                        </div>
                        <div className="col-md-4">
                            <Field name="typeticket" label="Type de ticket" component={TypeTicketComponent} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <hr/>
                            <Field name="subjects" component={SubjectChoice} data={props.data.Subjects} />
                        </div>
                    </div>
                    <hr/>
                    <h4>Localisation</h4>
                    <div className="row">
                        <div className="col-md-4">
                            <Field component={Sens} name="sens" label="Sens" />
                        </div>
                        <Fields names={['zone', 'emplacement',]} component={LocalisationInfos} data={Localisations}/>
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
                            <Field component={MultilineField} name="description" placeholder="Saisir la description du ticket SVP" />
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
            Subjects: PropTypes.array,
            OpenModes: PropTypes.array,
        }
    ).isRequired
}

NewTicket.defaultProps = {
    data: {
        Subjects: [],
        OpenModes: []
    }
}

export default reduxForm({
    form: 'newticket'
})(NewTicket)



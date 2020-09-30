import React from "react";
import {reduxForm, Field} from 'redux-form'
import InputField from "../../../components/form/Input";

function NewTicket(props){

    const { handleSubmit, pristine, reset, submitting } = props

    return (
        <div className="card">
            <div className="card-header card-header-text">
                <h4 className="card-title">Edit Profile</h4>
            </div>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-5">
                            <Field name="compagny" label="Compagnie" component={InputField} type="text"/>
                        </div>
                        <div className="col-md-3">
                            <Field name="username" label="UserName" component={InputField} type="text"/>
                        </div>
                        <div className="col-md-4">
                            <Field name="email" label="Email" component={InputField} type="email"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <Field name="firstName" label="First Name" component={InputField} type="text"/>
                        </div>
                        <div className="col-md-6">
                            <Field name="lastName" label="Last name" component={InputField} type="text"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="offset-md-1 col-md-2">
                            <button type="submit" className="btn btn-success pull-right">Valider</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default reduxForm({
    form: 'newticket' // a unique identifier for this form
})(NewTicket)



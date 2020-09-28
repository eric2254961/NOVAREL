import React from "react";
import {reduxForm, Field} from 'redux-form'
import InputField from "../../../components/form/Input";


function NewTicket(props){

    const { handleSubmit, pristine, reset, submitting } = props

    return (
        <div className="card">
            <div className="card-header card-header-primary">
                <h4 className="card-title">Edit Profile</h4>
                <p className="card-category">Complete your profile</p>
            </div>
            <div className="card-body">
                <form onSubmit={handleSubmit((data) => console.log("Forms", data) )}>
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
                        <button type="submit" className="btn btn-primary pull-right">Update Profile</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default reduxForm({
    form: 'newticket' // a unique identifier for this form
})(NewTicket)



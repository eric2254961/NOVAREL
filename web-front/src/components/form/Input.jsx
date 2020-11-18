import React from "react";
import TextField from '@material-ui/core/TextField';

function InputField(props){
    const {input, label, type, meta: {touched, error}} = props

    return(
        <React.Fragment>
            <div className="form-group bmd-form-group">
                <TextField label={label} {...input} />
            </div>
            {error && <span className="text-danger">{error}</span>}
        </React.Fragment>
    )
}
export default InputField;
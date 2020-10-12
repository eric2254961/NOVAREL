import React from "react";
import TextField from '@material-ui/core/TextField';

function InputField(props){
    const {input, label, type, meta: {touched, error}} = props

    return(
        <div className="form-group bmd-form-group">
            <TextField label={label} {...input} />
        </div>
    )
}
export default InputField;
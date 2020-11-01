import React from "react";
import TextField from '@material-ui/core/TextField';

function MultilineField(props){
    const {input, label, type, meta: {touched, error}, placeholder} = props

    return(
        <div className="form-group bmd-form-group">
            <TextField
                label={label}
                {...input}
                multiline
                rows={5}
                fullWidth
                placeholder={placeholder}
            />
            {touched && error && <span className="text-error">{error}</span>}
        </div>
    )
}
export default MultilineField;
import React from "react";
import TextField from '@material-ui/core/TextField';

function MultilineField(props){
    const {input, label, type, meta: {touched, error}} = props

    return(
        <div className="form-group bmd-form-group">
            <TextField
               label={label}
               {...input}
               multiline
               rows={5}
               fullWidth
            />
        </div>
    )
}
export default MultilineField;
import React from "react";
import {TextField, MenuItem} from "@material-ui/core";

function Sens(props){
    const {input, label, meta: {touched, error}, data} = props

    return (
        <React.Fragment>
            <TextField
            select
            defaultValue={1}
            label={label}
            fullWidth
            {...input}
            >
                <MenuItem value={1}>Vers Marcory (S1)</MenuItem>
                <MenuItem value={2}>Vers Cocody (S2)</MenuItem>
            </TextField>
            {error && <span className="text-danger">{error}</span>}
        </React.Fragment>
    )
}

export default Sens;
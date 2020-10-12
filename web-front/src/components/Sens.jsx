import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {TextField, MenuItem} from "@material-ui/core";

function Sens(props){

    const {input, label, meta: {touched, error}, data} = props
    const useStyles = makeStyles((theme) => ({
        root: {
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: '90%',
            },
        },
    }));

    const classes = useStyles();

    return (
        <div className={`${classes.root} form-group`}>
            <TextField
                select
                defaultValue={1}
                label={label}
                size="small"
                {...input}
            >
                <MenuItem value={1}>Vers Marcory (S1)</MenuItem>
                <MenuItem value={2}>Vers Cocody (S2)</MenuItem>
            </TextField>
        </div>
    )
}

export default Sens;
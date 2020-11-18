import React from "react";
import {MenuItem, TextField} from "@material-ui/core";

function TypeTicketComponent(props){

    const {input, label, meta: {touched, error}, data} = props

    return (
        <React.Fragment>
            <TextField
                select
                defaultValue={TypeTicket.INFORMATION}
                label={label}
                size="small"
                fullWidth
                {...input}
            >
                <MenuItem value={TypeTicket.RECLAMATION}>Réclamation</MenuItem>
                <MenuItem value={TypeTicket.PLAINTE}>Plainte</MenuItem>
                <MenuItem value={TypeTicket.SUGGESTION}>Suggestion</MenuItem>
                <MenuItem value={TypeTicket.INFORMATION}>Information</MenuItem>
            </TextField>
            {error && <span className="text-danger">{error}</span>}
        </React.Fragment>
    )
}

export class TypeTicket{
    static RECLAMATION = "RECL";
    static PLAINTE = "PLAI";
    static SUGGESTION = "SUGG";
    static INFORMATION = "INFO";
}

export default TypeTicketComponent
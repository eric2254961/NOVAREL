import React from "react";
import PropTypes from 'prop-types'
import {TextField, MenuItem} from "@material-ui/core";

function SelectField(props){
    const {input, label, meta: {touched, error}, data} = props

    return(
        <React.Fragment>
            <TextField
            select
            label={label}
            size="small"
            fullWidth
            {...input}
            >
                {data.map((item,k) => {
                    return <MenuItem key={k} value={item.Id}>{item.Libelle}</MenuItem>
                })}
            </TextField>
            {error && <span className="text-danger">{error}</span>}
        </React.Fragment>
    )
}
SelectField.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            Id: PropTypes.number,
            Libelle: PropTypes.string,
        })
    ),
}
SelectField.defaultProps = {
    data: [{Id: 0, Libelle: "Veuillez faire un choix SVP"}],
}
export default SelectField;
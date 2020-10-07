import React from "react";
import PropTypes from 'prop-types'

function SelectField(props){
    const {input, label, meta: {touched, error}, data} = props

    return(
        <div className="form-group bmd-form-group">
            <label className="bmd-label-floating">{label}</label>
            <select className="form-control" {...input}>
                {data.map(item => {
                    return <option value={item.value}>{item.libelle}</option>
                })}
            </select>
        </div>
    )
}
SelectField.propTypes = {
    data: PropTypes.array.isRequired
}
SelectField.defaultProps = {
    data: [],
}
export default SelectField;
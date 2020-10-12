import React from "react";
import PropTypes from 'prop-types'
import {Field} from "redux-form";
import CheckboxField from "./form/CheckBoxes";

function SubjectChoice(props){
    const {data} = props
    return (
        <React.Fragment>
            <h4>Objets</h4>
            <div>
                {data.map((item, k) => {
                    return <label className="radio-inline col-md-6 col-lg-6" key={k}>
                        <Field name={`subject${item.Id}`} size="small" component={CheckboxField} type="checkbox" value={item.Id} /> {item.Libelle}
                    </label>
                })}
            </div>
        </React.Fragment>
    )
}

SubjectChoice.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            Id: PropTypes.number,
            Libelle: PropTypes.string,
        })
    ).isRequired,
}

SubjectChoice.defaultProps = {
    data: []
}

export default SubjectChoice;
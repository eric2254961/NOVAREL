import React from "react";
import PropTypes from 'prop-types'
import Checkbox from '@material-ui/core/Checkbox';

function SubjectChoice(props){
    const {data, label, required, options, input, meta:{ touched, error }} = props
    
    let checkboxes = () => {
        return data.map((item, k) => {
            return  (
                <label className="radio-inline" key={k}>
                    <Checkbox 
                    color="default" 
                    name={`subject${item.Id}`} 
                    size="small" 
                    value={item.Id} 
                    checked={data.Id}
                    onChange={(event) => {
                        const newValue = [...input.value];
                        
                        if (event.target.checked) {
                            newValue.push(item.Id);
                        } else {
                            newValue.splice(newValue.indexOf(item.Id), 1);
                        }

                        return input.onChange(newValue);
                    }}
                    /> 
                    {item.Libelle}
                </label>)
        })
    }

    return (
        <React.Fragment>
            <h4>Objets</h4>
            <div>
                {checkboxes()}
            </div>
            {touched && error && <span className="text-danger">{error}</span>}
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
import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

function CheckboxField(props){
    const {input, label, type, meta: {touched, error}} = props
    return <Checkbox color="default" {...input} label={label} />
}

export default CheckboxField
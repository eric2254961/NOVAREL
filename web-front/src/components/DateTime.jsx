import React, { useState } from "react";
import PropTypes from "prop-types"
import { MuiPickersUtilsProvider,DateTimePicker, DatePicker } from "@material-ui/pickers";
import MomentUtils from '@date-io/moment';

function DateTime(props){

    const [selectedDate, handleDateChange] = useState(new Date());
    const {input, label, meta: {touched, error}} = props

    return (
        <MuiPickersUtilsProvider utils={MomentUtils} children={[]}>
            {props.showTime && <DateTimePicker
                {...input}
                disableFuture
                autoOk
                ampm={false}
                format="DD/MM/yyyy HH:mm"
                label={label}
                value={selectedDate}
            />}

            {!props.showTime && <DatePicker
                {...input}
                disableFuture
                autoOk
                format="DD/MM/yyyy"
                label={label}
                value={selectedDate}
            />}
        </MuiPickersUtilsProvider>
    );
}

DateTime.propTypes = {
    showTime: PropTypes.bool
}
DateTime.defaultProps = {
    showTime: false
}

export default DateTime
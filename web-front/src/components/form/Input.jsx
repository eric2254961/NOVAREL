import React from "react";

function InputField(props){
    console.log("Input", props)
    const {input, label, type, meta: {touched, error}} = props
    return(
        <div className="form-group bmd-form-group">
            <label className="bmd-label-floating">{label}</label>
            <input className="form-control" {...input} placeholder={label} type={type}/>
        </div>
    )
}
export default InputField;
import React from 'react';

const pad = arg =>{
    return arg<10 ? '0' + arg : arg
}
function ParseDate (props){
    let { value } = props
    //date = '#'
    let date = new Date(value)
    let dateString = pad(date.getDate())+'/'+pad(date.getMonth()+1)+'/'+date.getFullYear()+ ' '+pad(date.getHours())+':'+pad(date.getMinutes())+':'+pad(date.getSeconds());
    return(
        <React.Fragment>{dateString}</React.Fragment>
    )
}
export default ParseDate


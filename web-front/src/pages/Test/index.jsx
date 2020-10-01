import React from "react";
import addNotification from 'react-push-notification'

//https://www.npmjs.com/package/react-push-notification
function TestComponnent(props){
    const buttonClick = () => {
        addNotification({
            title: 'Warning',
            subtitle: 'This is a subtitle',
            message: 'This is a very long message',
            theme: 'darkblue',
            native: true // when using native, your OS will handle theming.
        });
    };

    return(
        <React.Fragment>
            <button onClick={buttonClick} className="button">
                Test notification Push.
            </button>
        </React.Fragment>
    )
}

export default TestComponnent
import React from "react";

const MessageSuccesTypeTextIcon = (props) => {
    const text = props.text;
    return ( 
        <div className="container__message-succes-type-text-icon">
            <div className="message-succes-type-text-icon__text">
                Completed
                <br/>
                {text}
            </div>
            <span className="message-succes-type-text-icon__icon"/>
        </div>
     );
}
 
export default MessageSuccesTypeTextIcon;
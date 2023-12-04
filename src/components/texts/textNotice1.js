import React from "react";

const TextNotice1 = (props) => {
    const text = props.text;
    return ( 
        <div className="container__text-notice1">
             {text}
        </div>
     );
}
 
export default TextNotice1;
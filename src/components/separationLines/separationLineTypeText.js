import React from "react";

const SeparationLineTypeText = (props) => {
    const text = props.text;
    return ( 
        <div className="container__separation-line-type-text">
            <span className="separation-line-type-text__line1"/>
            <span className="separation-line-type-text__text">{text}</span>
            <span className="separation-line-type-text__line2"/>
        </div>
     );
}
 
export default SeparationLineTypeText;
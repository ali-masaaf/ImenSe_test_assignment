import React from "react";

const InputTextTypeText = (props) =>{

    const text = props.text;
    return(
        <div className="container__input-text-type-text">
            <input type="text" value={text} />
        </div>
    );
}

export default InputTextTypeText;
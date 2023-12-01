import React from "react";

const InputTextTypeTextIconIcon = (props) =>{

    const text = props.text;
    return(
        <div className="container__input-text-type-text-icon-icon">
            <input type='text' value={text} className='input-text-type-text-icon-icon__text'/>
            <div className='input-text-type-text-icon-icon__icon-delete'/>
            <div className='input-text-type-text-icon-icon__icon-option'/>
        </div>
    );
}

export default InputTextTypeTextIconIcon;
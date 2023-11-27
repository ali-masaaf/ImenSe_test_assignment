import React from "react";

const InputSearch = () =>{
    return(
        <div className="container__input-search">
            <div className='input-search__icon'/>
            <input type='text' placeholder='Quick search ...' className='input-search__text'/>
        </div>
    );
}

export default InputSearch;
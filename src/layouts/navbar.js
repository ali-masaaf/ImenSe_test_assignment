import React from 'react';

const navbar = () => {
    return(
        <div className="body__navbar">
            <div className='navbar__logo'/>
            <div className='navbar__search'>
                <div className='search__icon'/>
                <input type='text' placeholder='Quick search ...' className='search__input-text'>
                   
                </input>
            </div>
        </div>
    );
}

export default navbar;
import React from 'react';
import InputSearch from '../components/inputs/inputSearch'; 
import NavbarLinks from '../components/navBarComponents/navbarLinks';
import NavbarUserAccout from '../components/navBarComponents/navbarUserAsccount';

const navbar = () => {
    return(
        <ul className="body__navbar">
            <li className='navbar__logo'/>
            <li className='navbar__search'>
                <div className='search__container'>
                    <InputSearch/>
                </div>
            </li>
            <li className='navbar__links'>
                <div className='links__container'>
                    <NavbarLinks/>
                </div>
            </li>
            <li className='navbar__user-account'>
                <div className='user-account__container'>
                    <NavbarUserAccout/>
                </div>
                
            </li>

        </ul>
    );
}

export default navbar;
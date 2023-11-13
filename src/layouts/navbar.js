import React from 'react';
import InputSearch from '../components/inputSearch'; 
import NavbarLinks from '../components/navbarLinks';
import NavbarUserAccout from '../components/navbarUserAsccount';

const navbar = () => {
    return(
        <ul className="body__navbar">
            <li className='navbar__logo'/>
            <li className='navbar__search'>
                <InputSearch/>
            </li>
            <NavbarLinks/>
            <NavbarUserAccout/>
        </ul>
    );
}

export default navbar;
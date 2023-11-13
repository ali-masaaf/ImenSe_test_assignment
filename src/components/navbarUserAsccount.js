import React from "react";

const NavbarUserAccout = () => {
    let name = "Blaise Defloo";
    let role = "Administrator"
    return ( 
        <li className='navbar__user-account'>
            <div className='user-account__notification' alt='notification icon'/>
            <div className='user-account__language' alt='langauge icon'/>
            <div className='user-account__profile'>
                <div className='profile__pictue' alt='profile'/>
                <div className='profile__informations'>
                    <span className='informations__full-name'>{name}</span>
                    <span className='informations__role'>{role}</span>
                </div>
            </div>
        </li>
     );
}
 
export default NavbarUserAccout;
import React from "react";
import { useState } from 'react';
import LanguagesCard from "./languagesCard";
import PofileMiniature from "./profileMiniature";
import ProfileMenu from "./profileMenu";

var name = "Blaise Defloo";
let role = "Administrator"

const NavbarUserAccout = () => {
    const handleMouseEnterLeaveLanguage = () => {
        const languagesDropdownCard = document.getElementById('navbar-user-account__languages-dropdown-card');
        
        if (languagesDropdownCard) {
            console.log("Here!!!!!!")
            languagesDropdownCard.classList.toggle("navbar-user-account__languages-dropdown-card--down");
        }
    };
    
    return ( 
        <li className='container__navbar-user-account'>
            <div className='navbar-user-account__notification' alt='notification icon'/>
            <ul className='navbar-user-account__languages-dropdown-card' id="navbar-user-account__languages-dropdown-card">
                <span className='languages-dropdown-card__menu-hiden-hover-area' onMouseEnter={handleMouseEnterLeaveLanguage} onMouseLeave={handleMouseEnterLeaveLanguage} />
                <div className='languages-dropdown-card__container'onMouseEnter={handleMouseEnterLeaveLanguage} onMouseLeave={handleMouseEnterLeaveLanguage}>
                    <LanguagesCard/>
                </div>
            </ul>
            <div className='navbar-user-account__profile-miniature'>
                <div className='profile-miniature__container'>
                    <PofileMiniature name={name} role={role}/>
                </div>
                <span className='profile-menu__hidden-hover-area'/>
                <ProfileMenu/>
            </div>
        </li>
     );
}
 
export default NavbarUserAccout;
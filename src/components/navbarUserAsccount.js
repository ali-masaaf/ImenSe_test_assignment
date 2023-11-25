import React from "react";
import LanguagesCard from "./languagesCard";
import PofileMiniature from "./profileMiniature";


var name = "Blaise Defloo";
let role = "Administrator"

const NavbarUserAccout = () => {
    const handleMouseEnterLeaveLanguage = () => {
        const languagesDropdownCard = document.getElementById('language__container');
        
        if (languagesDropdownCard) {
            languagesDropdownCard.classList.toggle("language__container--down");
        }
    };
    
    return ( 
        <li className='container__navbar-user-account'>
            <div className='navbar-user-account__notification' alt='notification icon'/>
            <ul className='navbar-user-account__language'  onMouseEnter={handleMouseEnterLeaveLanguage} onMouseLeave={handleMouseEnterLeaveLanguage}>
                <div className='language__container' id="language__container">
                    <span className='container__menu-hiden-hover-area'/>
                    <LanguagesCard/>
                </div>
            </ul>
            <div className='navbar-user-account__profile-miniature'>
                <div className='profile-miniature__container'>
                    <PofileMiniature name={name} role={role}/>
                </div>
            </div>
        </li>
     );
}
 
export default NavbarUserAccout;
import React from "react";
import ProfileMenuCard from "../cards/profileMenuCard";

const PofileMiniature = (props) => {
    const handleMouseEnterLeaveProfileMenu = () => {
        const languagesDropdownCard = document.getElementById('profile-miniature__container');
        
        if (languagesDropdownCard) {
            languagesDropdownCard.classList.toggle("profile-miniature__container--down");
        }
    };

    return ( 
    <div className="container__profile-miniature">
        <div className='profile-miniature__pictue' onMouseEnter={handleMouseEnterLeaveProfileMenu} onMouseLeave={handleMouseEnterLeaveProfileMenu} alt='profile'/>
        <div className='profile-miniature__informations' onMouseEnter={handleMouseEnterLeaveProfileMenu} onMouseLeave={handleMouseEnterLeaveProfileMenu}>
            <span className='informations__full-name'>{props.name}</span>
            <span className='informations__role'>{props.role}</span>
        </div>
        <div className="profile-miniature__container" id="profile-miniature__container" onMouseEnter={handleMouseEnterLeaveProfileMenu} onMouseLeave={handleMouseEnterLeaveProfileMenu}>
            <span className='container__hidden-hover-area'/>
            <ProfileMenuCard/>
        </div>
    </div> 
    );
}
 
export default PofileMiniature;
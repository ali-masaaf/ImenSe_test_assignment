import React from "react";
let groupName = "BESIX Group";
let email = "besix.group@besix.be";

const ProfileMenuCard = () => {
    return ( 
        <ul className='container__profile-menu'>
            <li className='profile-menu__personal-information'>
                <span className='personal-information__group'>{groupName}</span>
                <span className='personal-information__email'>{email}</span>
            </li>
            <li className='profile-menu__account-managment'>
                <div className='account-managment__settings'>
                    <span className='settings__icon'></span>
                    <span className='settings__text'>Profile settings</span>
                </div>
                <div className='account-managment__policies'>
                    <span className='policies__icon'></span>
                    <span className='policies__text'>Our policies</span>
                </div>
            </li>
            <li className='profile-menu__logout'>
                <span className='logout__icon'></span>
                <span className='logout__text'>Log out</span>
            </li>
        </ul>
     );
}

export default ProfileMenuCard;
import React from "react";
let groupName = "BESIX Group";
let email = "besix.group@besix.be";

const ProfileMenu = () => {
    return ( 
        <ul className='profile__menu'>
            <li className='menu__personal-information'>
                <span className='personal-information__group'>{groupName}</span>
                <span className='personal-information__email'>{email}</span>
            </li>
            <li className='menu__account-managment'>
                <div className='account-managment__settings'>
                    <span className='settings__icon'></span>
                    <span className='settings__text'>Profile settings</span>
                </div>
                <div className='account-managment__policies'>
                    <span className='policies__icon'></span>
                    <span className='policies__text'>Our policies</span>
                </div>
            </li>
            <li className='menu__logout'>
                <span className='logout__icon'></span>
                <span className='logout__text'>Log out</span>
            </li>
        </ul>
     );
}

export default ProfileMenu;
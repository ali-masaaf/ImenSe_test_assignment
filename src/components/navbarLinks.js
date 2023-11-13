import React from "react";

const NavbarLinks = () => {
    return(
        <li className='navbar__links'>
            <a href="/" className='links_dashboard'>Dashboard</a>
            <a href="/"className='links_traianings links_trainings--active'>Trainings</a>
            <a href="/"className='links__users'>Users</a>
            <div className='links__users'>
                <a href="/" className='users__text'>More</a>
                <div className='users__icon'/>
            </div>
        </li>
    )
}

export default NavbarLinks;
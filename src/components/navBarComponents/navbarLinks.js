import React from "react";
const NavbarLinks = () => {

    const handleMenu = () => {
        let navbarLinksUsers = document.getElementById('navbar-links__users');
        if(navbarLinksUsers)
        {
            navbarLinksUsers.classList.toggle("navbar-links__users--down")
        }
        else
        {
            console.log(navbarLinksUsers)
        }
    }
    
    return(
        <div className="container__navbar-links">
            <a href="/" className='navbar-links__dashboard'>Dashboard</a>
            <a href="/"className='navbar-links__traianings navbar-links__trainings--active'>Trainings</a>
            <a href="/"className='navbar-links___users'>Users</a>
            <div className='navbar-links__users' onMouseEnter={handleMenu} id="navbar-links__users">
                <a href="/" className='users__text'>More</a>
                <div className='users__icon'/>
            </div>
        </div>
    )
}

export default NavbarLinks;
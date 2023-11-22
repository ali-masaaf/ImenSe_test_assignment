import React from "react";

const PofileMiniature = (props) => {

    return ( 
    <div className="container__profile-miniature">
        <div className='profile-miniature__pictue' alt='profile'/>
        <div className='profile-miniature__informations'>
            <span className='informations__full-name'>{props.name}</span>
            <span className='informations__role'>{props.role}</span>
        </div>
    </div> 
    );
}
 
export default PofileMiniature;
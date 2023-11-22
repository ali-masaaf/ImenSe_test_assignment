import React from "react";

const LanguagesCard = () => {
    return ( 
        <div className="container_languages-card">
            <li className='languages-card__english languages-card__english--focus'>
                <span className='english__icon'/>
                <span className='english__text'>English (EN)</span>
            </li>
            <li className='languages-card__francais'>
                <span className='francais__icon'/>
                <span className='francais__text'>Français (FR)</span>
            </li>
            <li className='languages-card__nederlands'>
                <span className='nederlands__icon'/>
                <span className='nederlands__text'>Nederlands (NL)</span>
            </li>
            <li className='languages-card__espanol'>
                <span className='espanol__icon'/>
                <span className='espanol__text'>Español (ES) </span>
            </li>
            <li className='languages-card__deutsch'>
                <span className='deutsch__icon'/>
                <span className='deutsch__text'>Deutsch (DE) </span>
            </li>
        </div>
     );
}
 
export default LanguagesCard;
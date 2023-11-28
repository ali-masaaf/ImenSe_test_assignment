import React from 'react';
import Navbar from './navbar';
import { Outlet, Link } from "react-router-dom";

const PagesLayout = () => {
    return(
        <>
            <Navbar/>
            <div className="body__main">
                <Outlet/>
            </div>
        </>

    );
}

export default PagesLayout
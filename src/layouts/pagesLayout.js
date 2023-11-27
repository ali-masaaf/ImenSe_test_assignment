import React from 'react';
import Navbar from './navbar';
import EditTraining from './editTrainingHeader'

const PagesLayout = () => {
    return(
        <>
            <Navbar/>
            <div className="body__main">
                <EditTraining/>
            </div>
        </>

    );
}

export default PagesLayout
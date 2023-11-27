import React from "react";
import EditTrainingHeader from '../layouts/editTrainingHeader'

const editTraining = () => {
    return ( 
        <>
            <div className="main__editTraining">
                    <EditTrainingHeader/>
                <div className="editTraining__editContent">
                </div>
            </div>
            <div className="main__trainingQuizQuestions">

            </div>
            <div className="main__trainingQuizConfiguration">

            </div>
        </>
     );
}
 
export default editTraining;
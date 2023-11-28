import React from "react";
import EditTrainingHeader from '../layouts/editTrainingHeader'

const editTraining = () => {
    return ( 
        <>
            <div className="main__editTraining">
                <EditTrainingHeader/>
                <div className="editTraining__editContent">
                    <div className="editContent__informations">

                    </div>
                    <div className="editContent__image">

                    </div>
                    <div className="editContent__trainingFile">

                    </div>
                </div>
                <div className="editTraining__trainingQuizQuestions">

                </div>
                <div className="editTraining__trainingQuizConfiguration">

                </div>
            </div>
        </>
     );
}
 
export default editTraining;
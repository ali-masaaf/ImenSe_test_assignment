import React from "react";
import TextTitle1 from '../components/texts/textTitle1'
import ButtonSecondaryTypeText from '../components/buttons/buttonSecondaryTypeText'
import ButonPrimaryTypeFilled from '../components/buttons/butonPrimaryTypeFilled'

const editTrainingHeader = () => {
    return ( 
            <div className="editTraining__header">
                <div className="header__textTitel1">
                    <div className="textTitel1__container">
                        <TextTitle1 text="Edit Training “Working At Height”"/>                       
                    </div>
                </div>
                <div className="header__buttonSecondaryTypeText">
                    <div className="buttonSecondaryTypeText__container">
                        <ButtonSecondaryTypeText text="Cancel"/>                          
                    </div>
                </div>
                <div className="header__butonPrimaryTypeFilled">
                    <div className="butonPrimaryTypeFilled__container">
                        <ButonPrimaryTypeFilled text="Update & Save"/>                       
                    </div>
                </div>                      
            </div>
    );
}
 
export default editTrainingHeader;
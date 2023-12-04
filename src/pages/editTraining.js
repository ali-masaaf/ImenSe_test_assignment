import React from "react";
import EditTrainingHeader from '../layouts/editTrainingHeader'
import TextInputTitel from "../components/texts/textInputTitel";
import ButtonAddNewTypeTextIcon from '../components/buttons/buttonAddNewTypeTextIcon'
import DropDownListTypeIconTextIcon from '../components/dropDownLists/dropDownListTypeIconTextIcon'
import DropDownListTypeTextIcon from '../components/dropDownLists/dropDownListTypeTextIcon'
import InputTextTypeTextIconIcon from '../components/inputs/inputTextTypeTextIconIcon'
import InputTextArea from  '../components/inputs/inputTextArea'
import TextNotice2 from '../components/texts/textNotice2'
import TextNotice1 from '../components/texts/textNotice1'
import ImageUpload from '../components/imageUpload'
import MessageSuccesTypeTextIcon from '../components/messageSuccesTypeTextIcon'
import SeparationLineTypeText from '../components/separationLines/separationLineTypeText'
import InputTextTypeText from '../components/inputs/inputTextTypeText'

const editTraining = () => {
    return ( 
        <>
            <div className="main__editTraining">
                <EditTrainingHeader/>
                <div className="editTraining__editContent">
                    <div className="editContent__informations">
                        <div className="inoformations__category">
                            <div className="category__title">
                                <div className="title__container">
                                    <TextInputTitel text="Category"/>
                                    <ButtonAddNewTypeTextIcon/>
                                </div>
                            </div>
                            <DropDownListTypeIconTextIcon icon="safety" options={['Safety', 'Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum']}/>
                        </div>
                        <div className="inoformations__topic">
                            <div className="topic__title">
                                <div className="title__container">
                                    <TextInputTitel text="Topic"/>
                                    <ButtonAddNewTypeTextIcon/>
                                </div>
                            </div>
                            <DropDownListTypeIconTextIcon icon="workingAtHeight" options={['VCA', 'Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum']}/>
                        </div>
                        <div className="inoformations__valid-for">
                            <div className="valid-for__title">
                                <div className="title__container">
                                    <TextInputTitel text="Valid For"/>
                                </div>
                            </div>
                            <DropDownListTypeTextIcon icon="none" options={['1 year', 'Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum']}/>
                        </div>
                        <div className="inoformations__training">
                             <div className="training__title">
                                <div className="title__container">
                                    <TextInputTitel text="Training"/>
                                </div>
                            </div>
                            <div className="training__container">
                                <InputTextTypeTextIconIcon text="Working at height"/>
                            </div>    
                        </div>
                        <div className="inoformations__assign-to">
                            <div className="assign-to__title">
                                <div className="title__container">
                                    <TextInputTitel text="Assign to"/>
                                </div>
                            </div>
                            <div className="assign-to__container">
                                <DropDownListTypeTextIcon icon="none" options={['Internal workers', 'Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum']}/>
                            </div>
                        </div>
                        <div className="inoformations__departments">
                        <div className="departments_header">
                            <div className="header__title">
                                <div className="title__container">
                                    <TextInputTitel text="Department"/>
                                    </div>
                                </div>
                                <div className="header__notice">
                                    <div className="notice_container">
                                    <TextNotice2 text="Optional"/>
                                </div>
                                </div>
                            </div>
                            <div className="departments__container">
                                <DropDownListTypeTextIcon icon="none" options={['Select departments', 'Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum']}/>
                            </div>
                        </div>
                        <div className="inoformations__functions">
                            <div className="functions_header">
                                <div className="header__title">
                                    <div className="title__container">
                                        <TextInputTitel text="Functions"/>
                                    </div>
                                </div>
                                    <div className="header__notice">
                                        <div className="notice_container">
                                        <TextNotice2 text="Optional"/>
                                    </div>
                                </div>
                            </div>
                            <div className="functions__container">
                                <DropDownListTypeTextIcon icon="none" options={['Select functions', 'Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum']}/>
                            </div>
                        
                            </div>
                        <div className="inoformations__description">
                            <InputTextArea/>
                        </div>
                    </div>
                    <div className="editContent__image-upload">
                        <div className="image-upload__titel">
                            <div className="title__container">
                                <TextInputTitel text="Image"/>
                            </div>
                        </div>
                        <div className="image-upload__content">
                            <div className="content__image-upload">
                                <div className="image-upload__container">
                                    <ImageUpload type="image"/>
                                </div>
                            </div>
                        </div>
                        <div className="image-upload__notice">
                            <div className="notice_container">
                                <TextNotice1 text="*Only JPG, PNG files are allowed. Image must be less than 2 MB"/>
                            </div>
                        </div>
                    </div>
                    <div className="editContent__trainingFile">
                        <div className="trainingFile__titel">
                            <div className="title__container">
                                <TextInputTitel text="Training file"/>
                            </div>
                        </div>
                        <div className="trainingFile__content">
                            <div className="content__container">
                                <ImageUpload type="image"/>
                            </div>
                            <div className="content__message-succes">
                                <div className="message-succes__container">
                                    <MessageSuccesTypeTextIcon text="workingAtHeight.pdf"/>
                                </div>
                            </div>
                            <div className="content__notice">
                                <div className="notice_container">
                                    <TextNotice1 text="*Only Video, PDF and SlideShow files are allowed."/>
                                </div>
                            </div>
                            <div className="">

                            </div>
                            <div className="content__or-separator">
                                <div className="or-separator__container">
                                    <SeparationLineTypeText text="Or"/>
                                </div>
                            </div>
                            
                            <div className="content__media-url">
                                <div className="media-url__titel">
                                    <div className="title__container">
                                        <TextInputTitel text="Media URL"/>
                                    </div>
                                </div>
                                <div className="media-url__input">
                                    <div className="input__container">
                                        <InputTextTypeText text="https://www.pdf.com"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="editTraining__trainingQuizQuestions">

                </div>
                <div className="editTraining__trainingQuizConfiguration">
                    <span className="trainingQuizConfiguration__left-arrow"></span>
                    <div className="trainingQuizConfiguration__">

                    </div>
                    <div className="trainingQuizConfiguration__">

                    </div>
                    <div className="trainingQuizConfiguration__">

                    </div>
                    <div className="trainingQuizConfiguration__">

                    </div>
                    <div className="trainingQuizConfiguration__">

                    </div>
                    <div className="trainingQuizConfiguration__">

                    </div>
                    <span className="trainingQuizConfiguration__right-arrow"></span>
                </div>
            </div>
        </>
     );
}
 
export default editTraining;
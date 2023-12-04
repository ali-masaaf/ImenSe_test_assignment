import React from "react";

const ImageUpload = (props) => {
    const text = props.text
    return ( 
        <div className="container__file-upload">
            <span className="file-upload__icon-upload"/>
            <span className="file-upload__text">
                Drag and drop your {text} here 
                <br/>Or {' '}
                <a className="text__link">browse files</a>
            </span>
        </div>
     );
}
 
export default ImageUpload;
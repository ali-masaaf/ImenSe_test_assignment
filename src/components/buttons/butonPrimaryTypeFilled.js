import React from "react";
const ButonPrimaryTypeFilled = (props) => {
    const text = props.text
    return ( 
        <input type="button" value={text} className="container__butonPrimaryTypeFilled"/>
     );
}
 
export default ButonPrimaryTypeFilled;
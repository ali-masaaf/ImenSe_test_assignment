import {React, useEffect } from 'react';
import { ReactComponent as Safety } from '../../assets/icons/safety.svg';
import { ReactComponent as WorkingAtHeight } from '../../assets/icons/workingAtHeight.svg';

const DropDownListTypeIconTextIcon = (props) => {
    const options = props.options;
    const icon = props.icon;

    return ( 
        <div className="container__drop-down-list-type-icon-text-icon">
            <div className="drop-down-list-type-icon-text-icon__custom-select">
                <div className="custom-select">

                    {props.icon == "safety" ? <Safety className="select__icon-left"/> : ""}
                    {props.icon == "workingAtHeight" ? <WorkingAtHeight className="select__icon-left"/> : ""}
                    <select className="custom-select__target-select" id="customSelect" name="customSelect">
                        {
                            options.map((item,index)=>{
                                return <option key={index} value={index}>{item}</option>
                            })
                        }
                    </select>
                    <span className="select__icon-right"/>
                </div>
            </div>
        </div>
     );
}
 
export default DropDownListTypeIconTextIcon;
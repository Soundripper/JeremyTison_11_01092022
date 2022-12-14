import "./index.scss"
import { useState } from "react";
import { default as arrow_down } from '../../assets/arrow_down.svg';
import { default as arrow_up } from '../../assets/arrow_up.svg';

const Dropdown = ({ dropTitle, dropDetails } : {dropTitle:any, dropDetails:any}) => {

    const [isOpened, setIsOpened] = useState(false);
    function toggle() {
        setIsOpened(isOpened => !isOpened);
    }

    return (
        <div className="dropDownContainer">
            <div className="dropDownContainer--Button" onClick={toggle}>
                <h4 className="dropTitle">{dropTitle}</h4>
                {isOpened ? (
                <img className="arrow" src={arrow_down} alt={"arrow down"}/>
                ) : ( <img className="arrow" src={arrow_up} alt={"arrow up"}/> )}
            </div>
            <div className="dropdDownDetailsContainer">
            {isOpened && (
                <div className="dropdDownDetails">
                    {dropDetails}
                </div> )}
            </div>
        </div>
    )
}

export default Dropdown
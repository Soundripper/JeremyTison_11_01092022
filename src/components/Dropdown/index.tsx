import "./index.scss"
import { useState } from "react";
import { default as arrow_down } from '../../assets/arrow_down.svg';
import { default as arrow_up } from '../../assets/arrow_up.svg';

const Dropdown = () => {

    const [isOpened, setIsOpened] = useState(false);
    function toggle() {
        setIsOpened(isOpened => !isOpened);
    }

    return (
        <div className="dropDownContainer">
            <div className="dropDownContainer--Button" onClick={toggle}>
                <h4 className="dropTitle">Description</h4>
                {isOpened ? (
                <img className="arrow" src={arrow_down} alt={"arrow down"}/>
                ) : ( <img className="arrow" src={arrow_up} alt={"arrow up"}/> )}
            </div>
            <div className="dropdDownDetailsContainer">
            {isOpened ? (
                <div className="dropdDownDetails">
                    <h4>Climatisation</h4> <br />
                    <h4>Wi-Fi</h4> <br />
                    <h4>Cuisine</h4> <br />
                    <h4>Espace de travail</h4> <br />
                    <h4>Fer à repasser</h4> <br />
                    <h4>Sèche cheveux</h4> <br />
                    <h4>Cintres</h4>
                </div> ) : null}
            </div>
        </div>
    )
}

export default Dropdown
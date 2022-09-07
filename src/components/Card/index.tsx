import './index.scss'
// import { useEffect } from 'react';
// import useFetch from "../../hooks/useFetch"
import { useNavigate } from "react-router-dom";

// const data = useFetch();
// console.log(data)

const Card = ({ data } : {data:any}) => {
    
    let navigate = useNavigate();
    const clickOnCard = () => {
        navigate(`/HouseDetails/`);
    }

    return(
        <div className = "card" onClick={clickOnCard}>
            <div className = "cardTitle">
                {data.title}
            </div>
        </div>
    )
}

export default Card
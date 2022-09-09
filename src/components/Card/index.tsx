import './index.scss'
import { useNavigate } from "react-router-dom";

const Card = ({ data } : {data:any}) => {
    let navigate = useNavigate();
    const clickOnCard = () => {
        navigate(`/HouseDetails/:${data.id}`);
    }

    return(
        <div className = "card" onClick={clickOnCard}>
            <div className = "cardTitle">
                {data.title}
            </div>
            <div className='cardImage'>
                <img src={data.cover} alt="" />
            </div>
        </div>
    )
}

export default Card
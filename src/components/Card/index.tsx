import './index.scss'
import { useNavigate } from "react-router-dom";
import { HouseElement } from '../../hooks/useFetch';
interface CardProps {
    house: HouseElement
}

const Card = (props: CardProps) => {
    const {house} = props
    const navigate = useNavigate();
    const clickOnCard = () => {
        navigate((`/HouseDetails/:${house.id}`), {state : house});
    }

    return(
        <div className = "card" onClick={clickOnCard}>
            <div className = "cardTitle">
                {house.title}
            </div>
            <div className='cardImage'>
                <img src={house.cover} alt="" />
            </div>
        </div>
    )
}

export default Card
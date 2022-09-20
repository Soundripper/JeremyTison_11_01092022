import './index.scss'
import { useNavigate } from "react-router-dom";
import { HouseElement } from '../../hooks/useFetch';
interface CardProps {
    houseEl: HouseElement
}

const Card = (props: CardProps) => {
    const {houseEl} = props;
    const navigate = useNavigate();
    const clickOnCard = () => {
        navigate((`/HouseDetails/:${houseEl.id}`), {state : houseEl});
    }

    return(
        <div className = "card" onClick={clickOnCard}>
            <div className = "cardTitle">
                {houseEl.title}
            </div>
            <div className='cardImage'>
                <img src={houseEl.cover} alt="" />
            </div>
        </div>
    )
}

export default Card
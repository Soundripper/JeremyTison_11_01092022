import './index.scss'
import { useNavigate } from "react-router-dom";
// import { HouseElement } from '../../hooks/useFetch';
// interface CardProps {
//     house: HouseElement
// }

////////////// Refetch 
const Card = ({ data } : {data:any}) => {
    const navigate = useNavigate();
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

////////////// No Refetch
// const Card = (props: CardProps) => {
//     const {house} = props
//     const navigate = useNavigate();
//     const clickOnCard = () => {
//         navigate((`:${house.id}`), {state : house});
//     }

//     return(
//         <div className = "card" onClick={clickOnCard}>
//             <div className = "cardTitle">
//                 {house.title}
//             </div>
//             <div className='cardImage'>
//                 <img src={house.cover} alt="" />
//             </div>
//         </div>
//     )
// }

export default Card
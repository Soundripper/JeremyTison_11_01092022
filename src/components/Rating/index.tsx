import {default as starIcon} from "../../assets/star.png";
import {default as starFilledIcon} from '../../assets/starFilled.png';
import './index.scss'

const Rating = ({ratingCount} : {ratingCount : any}) => {
    return (
        <div className='ratingContainer'>
            {[...Array(5)].map((star, indexRating) => {
                return indexRating < ratingCount ? <img className="star" src={starFilledIcon} alt="star" key={indexRating}/> : <img className="star" src={starIcon} alt="star" key={indexRating}/>;
            })}
        </div>
    )
}

export default Rating


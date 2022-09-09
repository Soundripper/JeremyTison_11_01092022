import { default as starIcon } from '../../assets/star.svg';
import { default as starFilledIcon } from '../../assets/starFilled.svg';
import './index.scss'

const Rating = ({ratingCount} : {ratingCount : any}) => {
    return (
        <div className='ratingContainer'>
            {[...Array(5)].map((star, index) => {
                return index < ratingCount ? <img className="star" src={starFilledIcon} alt="star"/> : <img className="star" src={starIcon} alt="star"/>;
            })}
        </div>
    )
}

export default Rating
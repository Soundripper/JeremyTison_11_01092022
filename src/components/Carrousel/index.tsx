import "./index.scss"
import { useState } from "react"
import { default as leftArrow } from '../../assets/leftArrow.svg';
import { default as rightArrow } from '../../assets/rightArrow.svg';


const Carrousel = ({slides} : any) => {
    
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length -1 : currentIndex -1 ;
        setCurrentIndex(newIndex);
    }

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length -1;
        const newIndex = isLastSlide ? 0 : currentIndex +1;
        setCurrentIndex(newIndex);
    }

    return (
        <div className="carrouselContainer">
            <div className="leftArrow" onClick={goToPrevious}><img src={leftArrow} alt={"previous"}/></div>
            <div className="imageSlide"><img src={slides[currentIndex]} alt="" /></div>
            <div className="rightArrow" onClick={goToNext}><img src={rightArrow} alt={"next"}/></div>
        </div>
    )
}

export default Carrousel
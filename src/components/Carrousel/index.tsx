import "./index.scss"
import { useEffect, useState } from "react"
import { default as leftArrow } from '../../assets/leftArrow.svg';
import { default as rightArrow } from '../../assets/rightArrow.svg';


const Carrousel = ({slides} : any) => {

    const [moreThanOneImage, setMoreThanOneImage] = useState(false);
    useEffect(() => {
        if (slides.length > 1){
            setMoreThanOneImage(true);
        } 
        else {
            setMoreThanOneImage(false);
        }
    }, [slides])
    
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
            <div className="imageSlide"><img src={slides[currentIndex]} alt="" /><div className="numberOfImages">{currentIndex+1}/{slides.length}</div></div>
            { moreThanOneImage ? (
                <>
                    
                    <>
                        <div className="leftArrow" onClick={goToPrevious}><img src={leftArrow} alt={"previous"}/></div>
                        <div className="rightArrow" onClick={goToNext}><img src={rightArrow} alt={"next"}/></div>
                    </>
                </>
            ) : (<div></div>)
            }
        </div>
    )
}

export default Carrousel
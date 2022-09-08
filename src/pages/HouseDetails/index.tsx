import Carrousel from '../../components/Carrousel';
import { useEffect } from 'react';
import './index.scss'
import Tag from "../../components/Tag"
import Dropdown from "../../components/Dropdown"

function HouseDetails() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    const slides = [
        {url: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg"},
        {url: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg"},
        {url: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg"},
        {url: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-4.jpg"},
        {url: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-5.jpg"},
    ]

    return (
        <div>
            <Carrousel slides = {slides}/>
            <div className='detailsContainer'>
                <div className='detaislAndTagsContainer'>
                    <h2>Paris center, on the romantic Canal Saint-Martin</h2>
                    <h3>Paris, île-de-France</h3>
                    <div className='tagsContainer'>
                        <Tag />
                        <Tag />
                        <Tag />
                    </div>
                </div>
                <div className='ratingAndOwnerContainer'>
                    <div className='rating'>X X X X X</div>
                    <div className='ownerContainer'>
                        <div className='ownerName'>  <h3>Alexandre Dumas</h3> </div>
                        <div className='ownerImg'></div>
                    </div>
                </div>
            </div>
            <div className='dropDownsContainer'>
                <Dropdown />
                <Dropdown />
            </div>

        </div>
        
    )
  }
  
export default HouseDetails
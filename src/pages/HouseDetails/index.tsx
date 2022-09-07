import Banner from '../../components/Banner';
import { useEffect } from 'react';
import './index.scss'
import Tag from "../../components/Tag"
import Dropdown from "../../components/Dropdown"

function HouseDetails() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <div>
            <Banner />
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
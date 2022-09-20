import useFetch, { HouseElement } from '../../hooks/useFetch'
import Carrousel from '../../components/Carrousel';
import { useEffect, useState } from 'react';
import { useParams, useLocation } from "react-router-dom";
import './index.scss'
import Tag from "../../components/Tag"
import Loader from "../../components/Loader"
import Dropdown from "../../components/Dropdown"
import Rating from "../../components/Rating"

function HouseDetails() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    let params = useParams();
    let currentHouseId : any = (params.id);
    currentHouseId = currentHouseId.substring(1);

    const locationState = useLocation().state as any; 
    const {data} = useFetch((locationState === null));

    const [house, setHouse] = useState<HouseElement|null>(null);

    useEffect (() => {
        if (locationState !== null){
            setHouse(locationState);
            return;
        }
        if (data.length > 0){
            const currentDataFiltered = (data.filter((el : any) => el.id === currentHouseId)); 
            setHouse(() => currentDataFiltered.length > 0 ? currentDataFiltered[0] : null);
        }
    },[data, currentHouseId, house, locationState])

    const getContent = () => {
        if (!house) {
            return (<Loader />)
        }
        return (
            <div>
                <Carrousel slides = {house?.pictures}/>
                <div className='detailsContainer'>
                    <div className='detaislAndTagsContainer'>
                            <div>
                                <h2>{house.title}</h2>
                                <h3>{house.location}</h3>
                            </div>
                        <div className='tagsContainer'>
                            {(house.tags).map((tag: any, keyTags: number) => (
                                <Tag tag={tag} key={keyTags}/>
                            ))}
                        </div>
                    </div>
                    <div className='ratingAndOwnerContainer'>
                        <div className='rating'><Rating ratingCount={house.rating}/></div>
                        <div className='ownerContainer'>
                            <div className='ownerName'>  <h3>{house.host.name}</h3> </div>
                            <div className='ownerImg'><img src={house.host.picture} alt="" /></div>
                        </div>
                    </div>
                </div>
                <div className='dropDownsContainer'>
                    <Dropdown dropTitle="Description" dropDetails={<h4>{house.description}</h4>}/>
                    <Dropdown dropTitle="Equipements" dropDetails={(house.equipments).map((el: any, dropDownIndex: number) => (
                        <h4 key={dropDownIndex}>{el}</h4>
                    ))}/>
                </div>
            </div>
        )
    }    

    return (
        <div>
            {getContent()}
        </div>
    )
  }
  
export default HouseDetails
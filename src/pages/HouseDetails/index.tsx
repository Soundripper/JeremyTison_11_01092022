import useFetch from '../../hooks/useFetch'
import Carrousel from '../../components/Carrousel';
import { useEffect } from 'react';
import { useParams } from "react-router-dom";
import './index.scss'
import Tag from "../../components/Tag"
import Loader from "../../components/Loader"
import Dropdown from "../../components/Dropdown"
import Rating from "../../components/Rating"

function HouseDetails() {
    let params = useParams();
    let currentHouseId : any = (params.id);
    currentHouseId = currentHouseId.substring(1);

    const {data} = useFetch();
    let slides : any[] = [];
    let tags : any[] = [];
    let description : any[] = [];
    let equipments : any[] = [];
    let owner : any[] = [];
    let ownerPic : any = undefined;
    let ratingCount : any = undefined;

    let currentDataFiltered : any[] = (data.filter((el : any) => el.id === currentHouseId));
    
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    
    if(currentDataFiltered.length > 0){
        slides = currentDataFiltered[0].pictures;
        tags = currentDataFiltered[0].tags;
        description = currentDataFiltered[0].description;
        equipments = currentDataFiltered[0].equipments;
        owner = currentDataFiltered[0].host.name;
        ownerPic = currentDataFiltered[0].host.picture;
        ratingCount = currentDataFiltered[0].rating;
    }

    // console.log(ownerPic);
    
    
    return (
        <div>
            {!(currentDataFiltered.length>0) && (
                <Loader />
            )}
            {(currentDataFiltered.length>0) && (
                <div>
                    <Carrousel slides = {slides}/>
                    <div className='detailsContainer'>
                        <div className='detaislAndTagsContainer'>
                                <div>
                                    <h2>{currentDataFiltered[0].title}</h2>
                                    <h3>{currentDataFiltered[0].location}</h3>
                                </div>
                            <div className='tagsContainer'>
                                {tags.map((tag, id) => (
                                    <Tag tag={tag} key={id}/>
                                ))}
                            </div>
                        </div>
                        <div className='ratingAndOwnerContainer'>
                            <div className='rating'><Rating ratingCount={ratingCount}/></div>
                            <div className='ownerContainer'>
                                <div className='ownerName'>  <h3>{owner}</h3> </div>
                                <div className='ownerImg'><img src={ownerPic} alt="" /></div>
                            </div>
                        </div>
                    </div>
                    <div className='dropDownsContainer'>
                        <Dropdown dropTitle="Description" dropDetails={<h4>{description}</h4>}/>
                        <Dropdown dropTitle="Equipements" dropDetails={equipments.map((el, index) => (
                            <h4>{el}</h4>
                        ))}/>
                    </div>
                </div>
            )}
        </div>
    )
  }
  
export default HouseDetails
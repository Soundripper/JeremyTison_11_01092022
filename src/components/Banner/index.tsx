import './index.scss'
import '../../main.scss';
import "../../scss_utils/_mixins.scss";
import { useLocation } from 'react-router-dom';
import bannerHome from '../../assets/banner_home.jpg'
import bannerAbout from '../../assets/banner_about.jpg'


const Banner = () => {
    const location = useLocation();
    let bannerSource : string = '';
    if(location.pathname === "/"){
        bannerSource = bannerHome;
    }
    else if (location.pathname === "/about"){
        bannerSource = bannerAbout;
    }

    return (
        <div className = 'bannerContainer'>
            <div className = 'banner'>
                <img className="bannerImg" src={bannerSource} alt={"banner"}/>
                <h3 className = "slogan">Chez vous, partout et ailleurs</h3>
            </div>
        </div>
    )
}

export default Banner;
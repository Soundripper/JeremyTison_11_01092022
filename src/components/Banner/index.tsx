import './index.scss'
import '../../main.scss';
import "../../scss_utils/_mixins.scss";
import { default as logo } from '../../assets/logo.svg';

function Banner() {
    return (
        <div className = 'bannerContainer'>
            <div className = 'banner'>
                <img className="bannerImg" src={logo} alt={"banner"}/>
                <h3 className = "slogan">Chez vous, partout et ailleurs</h3>
            </div>
        </div>
    )
}

export default Banner;
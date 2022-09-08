import "./index.scss"
import { default as logo } from '../../assets/logo.svg';

const Footer = () => {
    return (
        <div className="footerContainer">
            <img className="logoFooter" src={logo} style={{filter: "brightness(100000%)"}} alt="Kasa logo" />
            <h4 className="copyright">© 2020 Kasa. All rights reserved</h4>
        </div>
    )
}

export default Footer
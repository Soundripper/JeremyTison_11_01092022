import './index.scss'
import { NavLink } from 'react-router-dom'
import { default as logo } from '../../assets/logo.svg';

function Header() {
    
    return (
        <div className = 'headerContainer'>
            <div><img className="logo" src={logo} alt={"logo Kasa"}/></div>
            <div className = 'navMenu'>
                <NavLink className={({isActive}) => isActive ? "activeLink": "link" } to="/">ACCUEIL</NavLink>
                <NavLink className={({isActive}) => isActive ? "activeLink": "link" } to="/about">A PROPOS</NavLink>
            </div>
        </div>
    )
  }

export default Header

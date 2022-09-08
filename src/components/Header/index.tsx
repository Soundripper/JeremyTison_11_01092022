// import logo from '../../assets/logo.svg'
import './index.scss'
import { NavLink } from 'react-router-dom'
import { default as logo } from '../../assets/logo.svg';
// import { useState } from 'react';

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

// function Header() {
// const [btnState, setBtnState] = useState(false);
    
// function handleClick(){
//     setBtnState(btnState => !btnState);
// }

// let toggleClassCheck = btnState ? ' activeLink': '';

//     return (
//         <div className = 'headerContainer'>
//             <div><img className="logo" src={logo} alt={"logo Kasa"}/></div>
//             <div className = 'navMenu'>
//                 <Link className = {`link${toggleClassCheck}`} to="/" onClick={handleClick}>ACCUEIL</Link>
//                 <Link className = {`link${toggleClassCheck}`} to="/about" onClick={handleClick}>A PROPOS</Link>
//             </div>
//         </div>
//     )
//   }

// export default Header
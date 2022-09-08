import './index.scss'
import Banner from '../../components/Banner'
import Dropdown from "../../components/Dropdown"

function About() {
    return (
      <div>
        <Banner />
        <div className='dropDownsWrapper'>
          <Dropdown />
          <Dropdown />
          <Dropdown />
          <Dropdown />
        </div>
        
      </div>
    )
  }
  
export default About
import './index.scss'
// import { useLocation } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import Banner from '../../components/Banner'
import Card from '../../components/Card'
import Loader from '../../components/Loader'

function Home() {
  let {data, isLoading} = useFetch();

  const getContent = () => {
    if (isLoading){
      return <Loader />
    }
    return (
      data.map((house, id) => (
        <Card house={house} key={id}/>
      ))
    )
  }

  return (
    <div>
      <Banner />
      <div className='cardsContainer'>
        {getContent()}
      </div>
    </div>
  )
}
  
export default Home
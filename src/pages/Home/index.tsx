import './index.scss'
// import { useLocation } from 'react-router-dom'
import useFetch, { HouseElement } from '../../hooks/useFetch'
import Banner from '../../components/Banner'
import Card from '../../components/Card'
import Loader from '../../components/Loader'

function Home() {
  let {data, isLoading} = useFetch();

  ////////// Refetch
  return (
    <div>
      <Banner />
      <div className='cardsContainer'>
        {isLoading && (
          <Loader />
        )}
        {!isLoading && (
          data.map((house, id) => (
            <Card data={house} key={id}/>
          ))
        )}
      </div>
    </div>
  )

  ////////// No Refetch
  // return (
  //   <div>
  //     <Banner />
  //     <div className='cardsContainer'>
  //       {isLoading && (
  //         <Loader />
  //       )}
  //       {!isLoading && (
  //         data.map((house: HouseElement, id) => (
  //           <Card house={house} key={id}/>
  //         ))
  //       )}
  //     </div>
  //   </div>
  // )
}
  
export default Home
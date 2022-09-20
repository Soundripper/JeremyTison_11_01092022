import './index.scss'
import useFetch from '../../hooks/useFetch'
import Banner from '../../components/Banner'
import Card from '../../components/Card'
import Loader from '../../components/Loader'

function Home() {
  const {data, isLoading} = useFetch();

  const getContent = () => {
    if (isLoading){
      return <Loader />
    }
    return (
      data.map((house, id) => (
        <Card houseEl={house} key={id}/>
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
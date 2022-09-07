import './index.scss'
import useFetch from '../../hooks/useFetch'
import Banner from '../../components/Banner'
import Card from '../../components/Card'

function Home() {
  let {data} = useFetch();
  console.log(data);

  return (
    <div>
      <Banner />
      <div className='cardsContainer'>
        {data.map((title, id) => (
          <Card data={title} key={id}/>
        ))} 
      </div>
    </div>
  )
}
  
export default Home
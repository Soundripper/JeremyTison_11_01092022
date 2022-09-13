import {useState, useEffect} from 'react';
export interface HouseElement{
  id: string;
  title: string;
  cover: string;
  pictures: string[];
  description: string;
  host: HouseHost;
  rating: string;
  location: string;
  equipments: string[];
  tags: string[];
}

export interface HouseHost{
  name: string;
  picture: string;
}

const useFetch = (needFetch : boolean = true) => {
    const [data, setData] = useState([]);
    const [hasError, setHasError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
      const getData = async () => {
        setIsLoading(true);
        try {
          setTimeout(async () => {
            const res = await fetch('/data/logements.json');
            const data = await res.json();
            setData(() => data);
            setIsLoading(false);
          }, 1000)
        }
        catch (e) {
          setHasError(true);
          setIsLoading(false);
        }
      }
      if (needFetch){
        getData();
      }
      
    },[needFetch])

    return(
      {
      hasError,
      isLoading,
      data
      }
    )
}

export default useFetch;
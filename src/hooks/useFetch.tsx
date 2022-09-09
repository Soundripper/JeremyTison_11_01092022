import {useState, useEffect} from 'react';

const useFetch = () => {

    const [data, setData] = useState([]);
    const [hasError, setHasError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
      // console.log("toto")
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
        getData();
    },[])

    return(
      {
      hasError,
      isLoading,
      data
      }
    )
}

export default useFetch;
// import React,{useState,useEffect} from 'react';
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import ErrorPage from './pages/NotFound';
import HouseDetails from './pages/HouseDetails';
import Header from './components/Header';
import Footer from './components/Footer';

function App() :any {

    // const [data, setData]= useState([]);

    // const getData=()=>{
    //   fetch('/data/logements.json'
    //   ,{
    //     headers : { 
    //       'Content-Type': 'application/json',
    //       'Accept': 'application/json'
    //      }
    //   }
    //   )
    //     .then(function(response){
    //       return response.json();
    //     })
    //     .then(function(myJson) {
    //       setData(myJson)
    //     });
    // }

    // useEffect(()=>{
    //   getData()
    // },[])

    // console.log(data)

    return(
      <BrowserRouter>
        <div className="mainWrapper">
          <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/HouseDetails" element={<HouseDetails />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    )

  }

export default App;

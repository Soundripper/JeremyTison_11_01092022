import { BrowserRouter, Routes, Route,} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import ErrorPage from './pages/NotFound';
import HouseDetails from './pages/HouseDetails';
import Header from './components/Header';
import Footer from './components/Footer';

function App() :any {

    return(
      <BrowserRouter>
        <div className="mainWrapper">
          <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/HouseDetails/:id" element={<HouseDetails />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    )

  }

export default App;

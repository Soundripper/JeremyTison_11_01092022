import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import routesArray from "./routerConfig";

const routesConfig = () => {
  return routesArray.map((item, index) => <Route path={item.path} element={item.component} key={index} />);
}

function App() :any {
  return(
    <BrowserRouter>
    {/* <BrowserRouter basename="/ocr/p11_kasa/"> */}
      <div className="mainWrapper">
        <Header />
        <Routes>
          {routesConfig()}
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App;

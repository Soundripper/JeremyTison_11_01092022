import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import routesArray from "./routerConfig";

const routesConfig = () => {
  return routesArray.map(({path, component}, key) => <Route path={path} element={component} key={key} />);
}

function App() :any {
  return(
    <BrowserRouter>
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

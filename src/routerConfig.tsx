import Home from './pages/Home';
import About from './pages/About';
import ErrorPage from './pages/NotFound';
import HouseDetails from './pages/HouseDetails';

const HOME = '/';
const ABOUT = '/About';
const HOUSE_DETAILS = '/HouseDetails/:id';

const routesArray = [
    {
        path: HOME,
        component: <Home />
    },
    {
        path: ABOUT,
        component: <About />
    },
    {
        path: HOUSE_DETAILS,
        component: <HouseDetails />
    },
    {
        path: '*',
        component: <ErrorPage />
    },
    
  ];

export default routesArray ;
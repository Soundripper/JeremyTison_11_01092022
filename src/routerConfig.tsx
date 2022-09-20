import Home from './pages/Home';
import About from './pages/About';
import ErrorPage from './pages/NotFound';
import HouseDetails from './pages/HouseDetails';

const routesArray = [
    {
        path: '/',
        component: <Home />
    },
    {
        path: '/About',
        component: <About />
    },
    {
        path: '/HouseDetails/:id',
        component: <HouseDetails />
    },
    {
        path: '*',
        component: <ErrorPage />
    },
    
  ];

export default routesArray ;
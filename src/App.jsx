import { useRoutes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import MyAccount from './pages/MyAccount';
import MyOrder from './pages/MyOrder';
import MyOrders from './pages/MyOrders';
import NotFound from './pages/NotFound';
import SignIn from './pages/SignIn';
import Navbar from './components/Navbar';
import CheckoutSideMenu from './components/CheckoutSideMenu';
import { ProductsProvider } from './context/ProductsContext';
import './App.css';

const AppRoutes = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/:category',
      element: <Home />,
    },
    {
      path: '/my-account',
      element: <MyAccount />,
    },
    {
      path: '/my-orders',
      element: <MyOrders />,
    },
    {
      path: '/my-orders/:id',
      element: <MyOrder />,
    },
    {
      path: '/*',
      element: <NotFound />,
    },
    {
      path: '/sign-in',
      element: <SignIn />,
    },
  ]);
  return routes;
};

function App() {
  return (
    <BrowserRouter>
      <ProductsProvider>
        <Navbar />
        <AppRoutes />
        <CheckoutSideMenu />
      </ProductsProvider>
    </BrowserRouter>
  );
}

export default App;

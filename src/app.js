import React, { Suspense, lazy, useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Body from './components/Body';
import HeaderContainer from './components/Header';
// import About from ;
import Settings from './components/Setting';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Error from './components/Error';
import RestaurantMenuCard from './components/RestaMenu';
import UserContext from "./utils/UserContext";
import { Provider } from 'react-redux';
import AppStore from './utils/appStore';
import Cart from './components/cart';

const Main = () => {
  const [userName, setUserName] = useState();

  //authentication
  useEffect(() => {
    // Make an API call and send username and password
    const data = {
      name: "Akshay Saini",
    };
    setUserName(data.name);
  }, []);
  return (
    <Provider store={AppStore} >
      <UserContext.Provider  value={{ loggedInUser: userName, setUserName }}>
        <div>
          <HeaderContainer />
          <Outlet />
        </div>
    </UserContext.Provider>
    </Provider> 
  )
}
const About = lazy(() => import('./components/About'));
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Body />
      },
      {
        path: '/about',
        element: <Suspense fallback={<h1>Loading....</h1>}><About /></Suspense>
      },
      {
        path: '/settings',
        element: <Settings />
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/menu/:id',
        element: <RestaurantMenuCard />
      }
    ],
    errorElement: <Error />
  }
])
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
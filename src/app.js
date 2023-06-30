import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Body from './components/Body';
import HeaderContainer from './components/Header';
import About from './components/About';
import Settings from './components/Setting';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Error from './components/Error';
import RestaurantMenuCard from './components/RestaMenu';

const Main = () =>{
    return (
        <>
          <HeaderContainer />
          <Outlet />
        </>
    )
}
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
        element: <About />
      },
      {
        path: '/settings',
        element: <Settings />
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
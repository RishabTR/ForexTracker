import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import About from './components/RoutePages/About';
import Help from './components/RoutePages/Help';
import Contact from './components/RoutePages/Contact';
import Error from './components/Error';
import Body from './components/Body';
import Track from './components/RoutePages/Track';

const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    errorElement:<Error/>,
    children:[
      {
        path:'/',
        element:<Body/>
      },
      {
        path:'/about',
        element:<About/>,
      },
      {
        
        path:'/Contact',
        element:<Contact/>,
      },
      {
        path:'/help',
        element:<Help/>,
      },
      {
        path:'/track',
        element:<Track/>
      }
    ]
  },
   
]);



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter}></RouterProvider>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

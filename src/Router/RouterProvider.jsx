import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Appointment from "../Pages/Appointment/Appointment";
import Home from "../Pages/Home/Home";
import Banner from "../Pages/Home/Banner";
import Login from "../Pages/Login/Login";
import error from '../assets/error.png'
import Signin from "../Pages/Signin/Signin";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <img className="mx-auto " src={error} alt="" />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "appointment",
        element: <Appointment />,
      },
      {
        path: '/',
        element:<Banner/>
      },
      {
        path: 'login',
        element: <Login/>
      },
      {
        path: 'signin',
        element: <Signin/>
      }
      
      
    ],
  },
]);

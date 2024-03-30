import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Appointment from "../Pages/Appointment/Appointment";
import Home from "../Pages/Home/Home";
import Banner from "../Pages/Home/Banner";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
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
      
      
    ],
  },
]);

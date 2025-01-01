import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";

 export const router = createBrowserRouter([
    {
      path: "/",
      errorElement : <p>Error</p> ,
      element: <MainLayout></MainLayout>,
      children : [
        {
            path : "/" ,
            element : <Home></Home> ,
        },
        {
          path : "/menu" ,
          element : <Menu></Menu>
        },
        {
          path : "/order" ,
          element : <Order></Order>
        }
      ]
    },
  ]);
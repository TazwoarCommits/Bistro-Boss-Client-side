import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";

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
          path : "/order/:category" ,
          element : <Order></Order>
        },
        {
          path : "/login" , 
          element : <Login></Login>
        },
        {
          path : "/register" , 
          element : <Register></Register>
        },
        {
          path : "/secret",
          element : <PrivateRoute><p>ORRRRRRRRRRRRRRRREEEEEEEEEEEEEEEEEEE</p></PrivateRoute>
        }
      ]
    },
  ]);
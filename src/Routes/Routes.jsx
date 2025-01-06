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
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import AllUsers from "../Pages/Dashboard/All Users/AllUsers";
import AdminRoute from "./AdminRoute";
import AddItem from "../Pages/Dashboard/AddItem/AddItem";
import ManageBooking from "../Pages/Dashboard/ManageBooking/ManageBooking";
import ManageItem from "../Pages/Dashboard/ManageItem/ManageItem";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <p>Error</p>,
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>
      },
      {
        path: "/order/:category",
        element: <Order></Order>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
    ]
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "/dashboard/cart",
        element : <PrivateRoute><Cart></Cart></PrivateRoute>
      },

      // admin routes 
      {
        path : "/dashboard/allUsers" ,
        element : <AdminRoute><AllUsers></AllUsers></AdminRoute>
      },
      {
         path : "/dashboard/addItems" , 
         element : <AdminRoute><AddItem></AddItem></AdminRoute>
      },
      {
         path : "/dashboard/manageItems" , 
         element : <AdminRoute><ManageItem></ManageItem></AdminRoute>
      },
      {
         path : "/dashboard/manageBookings" , 
         element : <AdminRoute><ManageBooking></ManageBooking></AdminRoute>
      },
    ],
  },
]);
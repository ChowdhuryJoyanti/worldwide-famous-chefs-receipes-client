import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ChefLayout from "../layout/ChefLayout";

import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import LoginLayout from "../layout/LoginLayout/LoginLayout";
import Details from "../pages/Details/Details";
import Blog from "../pages/Blog/Blog";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage/ErrorPage";



const router = createBrowserRouter([
       

    {
        path:'/',
        element:<Main></Main>,
        
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/',
                element:<Navigate to="/home"></Navigate>
                // loader:({params}) => fetch(`https://worldwide-famous-chefs-receipes-server-chowdhuryjoyanti.vercel.app/alldata`)
            },
          
            {
                path:'/blog',
                element:<Blog></Blog>   
            
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            },
            {
                path:'/details/:id',
                element:<PrivateRoute><Details></Details></PrivateRoute>
            },
            {
                    path:'/*',
                    element:<ErrorPage></ErrorPage>
            }
         
        ]
    },
  
])

export default router;
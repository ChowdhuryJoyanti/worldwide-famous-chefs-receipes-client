import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ChefLayout from "../layout/ChefLayout";

import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import LoginLayout from "../layout/LoginLayout/LoginLayout";
import Details from "../pages/Details/Details";



const router = createBrowserRouter([
       

    {
        path:'/',
        element:<Main></Main>,
        
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:({params}) => fetch(`http://localhost:5000/alldata`)
            },
            {
                path:'/details',
                element:<Details></Details>    
            
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            },
            // {
            //     path:'/login',
            //     element:<Login></Login>
            // },
            // {
            //     path:'/Register',
            //     element:<Register></Register>
            // },


            // {
            //     path:'/country/:id',
            //     element:<Country></Country>,
            //     loader: ({params}) => fetch(`http://localhost:5000/countries/${params.id}`)
            // },
        ]
    },
    // {
    //     path:'chefs',
    //     element:<ChefLayout></ChefLayout>,
    //     children:[
    //         {
    //             path:'id',
    //             element:<Chefs></Chefs>

    //         }
    //     ]
    // }
])

export default router;
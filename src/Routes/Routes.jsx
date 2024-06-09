import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Estate from "../Pages/Estate/Estate";


const router = createBrowserRouter([
    {
        path : "/",
        element : <Root></Root>,
        children : [
           {
            path: '/',
            element : <Home></Home>,
            loader : () => fetch('/estates.json')

           },
           {
            path: '/estates/:id',
            element : <Estate></Estate>
           },

           {
            path: '/login',
            element : <Login></Login>
           },
           {
            path: '/register',
            element : <Register></Register>
           },
        ]
    }

])

export default router ;
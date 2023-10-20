import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "../Provider/PrivateRoute";
import Secret from "../Shared/Secret/Secret";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/menu",
                element: <Menu/>,
            },
            {
                path: "/order/:category",
                element: <PrivateRoute><Order/></PrivateRoute>,
            },
            {
                path: "login",
                element: <Login/>
            },
            {
                path: "signUp",
                element: <SignUp/>
            },
            {
                path: "secret",
                element: <PrivateRoute><Secret/></PrivateRoute>
            }
        ]
    },
]);
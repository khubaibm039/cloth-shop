import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root";
import Error from "../Pages/Error";
import Register from "../Authentication/Register";
import Login from "../Authentication/Login";
import Users from "../Pages/Users";
import PrivateRoute from "./PrivateRoute";
import AddProduct from "../Pages/AddProduct";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
            {
                path: "/user",
                element: (
                    <PrivateRoute>
                        <Users />
                    </PrivateRoute>
                ),
                loader: () => fetch("http://localhost:5000/users"),
            },
            {
                path: "/dashboard",
            },
            {
                path: "/addProduct",
                element: (
                    <PrivateRoute>
                        <AddProduct />
                    </PrivateRoute>
                ),
            },
        ],
    },
]);

export default router;

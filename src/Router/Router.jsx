import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root";
import Error from "../Pages/Error";
import Register from "../Authentication/Register";
import Login from "../Authentication/Login";

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
                path: "/",
            },
            {
                path: "/",
            },
        ],
    },
]);

export default router;

import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Error from "../error/Error";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CreateAssignment from "../pages/CreateAssignment";
import AllAssignments from "../pages/AllAssignments";
import MyAssignment from "../pages/MyAssignment";
import PrivateRoute from "../private/PrivateRoute";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/createAssignment",
                element: <PrivateRoute><CreateAssignment></CreateAssignment></PrivateRoute>,
            },
            {
                path: "/allAssignment",
                element: <PrivateRoute><AllAssignments></AllAssignments></PrivateRoute>,
            },
            {
                path: "/myAssignments",
                element: <PrivateRoute><MyAssignment></MyAssignment></PrivateRoute>,
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
])

export default routes;
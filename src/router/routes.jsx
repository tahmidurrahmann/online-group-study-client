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
import AssignmentDetails from "../pages/AssignmentDetails";
import UpdateAssignment from "../pages/UpdateAssignment"

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
                element: <AllAssignments></AllAssignments>,
                loader: () => fetch(`http://localhost:5010/create-assignment`)
            },
            {
                path: "/allAssignment/:id",
                element: <PrivateRoute><AssignmentDetails></AssignmentDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5010/create-assignment/${params.id}`)
            },
            {
                path: "/update/:id",
                element: <UpdateAssignment></UpdateAssignment>,
                loader: ({ params }) => fetch(`http://localhost:5010/create-assignment/${params.id}`)
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
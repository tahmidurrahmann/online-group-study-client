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
import PatchAssignment from "../pages/PatchAssignment";
import MineAssignments from "../pages/MineAssignments";

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
                loader : () => fetch('https://online-group-study-server-blush.vercel.app/create-assignment'),
            },
            {
                path: "/allAssignment/:id",
                element: <PrivateRoute><AssignmentDetails></AssignmentDetails></PrivateRoute>,
            },
            {
                path: "/update/:id",
                element: <PrivateRoute><UpdateAssignment></UpdateAssignment></PrivateRoute>
            },
            {
                path: "/patchAssignment/:id",
                element: <PrivateRoute><PatchAssignment></PatchAssignment></PrivateRoute>
            },
            {
                path: "/myAssignments",
                element: <PrivateRoute><MineAssignments></MineAssignments></PrivateRoute>,
            },
            {
                path: "/submittedAssignments",
                element: <PrivateRoute><MyAssignment></MyAssignment></PrivateRoute>
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
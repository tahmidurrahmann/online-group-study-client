import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Loading from "../loader/Loading";

const PrivateRoute = ({ children }) => {

    const { user, loading } = useAuth();

    if(loading){
        return <Loading></Loading>
    }

    if(user){
        return children
    }

    return <Navigate to='/login'></Navigate>
};

export default PrivateRoute;
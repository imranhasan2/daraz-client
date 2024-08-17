import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider";
import { useContext } from "react";


const PrivateRoute = ({children}) => {
    const { user,loader } = useContext(AuthContext)
    const location = useLocation()
    if(loader){
        return <span className="loading loading-spinner loading-lg mt-5 mb-5 "></span>
    }

    if (user) {
        return children;
    }

    return <Navigate state={location?.pathname} to='/login'></Navigate>
};

export default PrivateRoute;
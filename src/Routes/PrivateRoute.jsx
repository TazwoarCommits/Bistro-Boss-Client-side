import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return (
            <div className="h-[50vh] flex text-center items-center justify-center">
                <span className="loading loading-bars loading-xs"></span>
                <span className="loading loading-bars loading-sm"></span>
                <span className="loading loading-bars loading-md"></span>
                <span className="loading loading-bars loading-lg"></span>
            </div>
        )
    }

    if (user) {
        return children;
    }

    else {
        return <Navigate to="/login"></Navigate>
    }
};

PrivateRoute.propTypes = {
    children : PropTypes.object
}

export default PrivateRoute;
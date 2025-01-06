import { useContext } from "react";
import useAdmin from "../Hooks/useAdmin";
import { AuthContext } from "../Providers/AuthProvider";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

const AdminRoute = ({children}) => {
     const { user, loading } = useContext(AuthContext);
     const [isAdmin , isPending] = useAdmin() ;
    
        if (loading || isPending) {
            return (
                <div className="h-[50vh] flex text-center items-center justify-center">
                    <span className="loading loading-bars loading-xs"></span>
                    <span className="loading loading-bars loading-sm"></span>
                    <span className="loading loading-bars loading-md"></span>
                    <span className="loading loading-bars loading-lg"></span>
                </div>
            )
        }
    
        if (user && isAdmin) {
            return children;
        }
    
        else {
            return <Navigate to="/login"></Navigate>
        }
};

AdminRoute.propTypes = {
    children : PropTypes.object
}

export default AdminRoute;
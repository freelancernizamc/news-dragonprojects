import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from "react-router";
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log('user in private route', user);
    if (loading) {
        return <Spinner animation="border" variant="primary" />
    }

    if (user) {
        return children;
    }
    return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
};

export default PrivateRoute;


/**
 * ---------------------
 *          Steps
 * ---------------------
 * 1. Check user is logged in or not
 * 2. If user is logged in, then allow them to visit the route
 * 3. Else redirect the user to the login page
 * 4. setup the private router 
 * 5. handle loading
*/
import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router-dom';
import useAuth from './../../Hooks/useAuth'
const PrivateRoute = ({ children, ...rest }) => {
    const { user,isLoading } = useAuth();
    if(isLoading){ 
        return <div className="mt-5 mb-5 d-flex justify-content-center" > <Spinner  animation="border" variant="danger"></Spinner></div>
    }
    return (
        <Route
            {...rest} 
            render={({ location }) => user?.email ? children : <Redirect to={{
                pathname: "/login",
                state: { from: location }
            }


            }></Redirect>
            }
            >
        </Route>
    );
};

export default PrivateRoute;
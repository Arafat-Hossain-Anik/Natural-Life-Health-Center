import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useAuth from './../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    // const {children, ...rest} = props;
    const { user, isLoading } = useAuth();
    // console.log(isLoading);
    if (isLoading) {
        return (<div className="spinner-border my-5" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>);
    }
    return (
        <Route
            {...rest}
            render={({ location }) => user.email ?
                children :
                <Redirect
                    to={{
                        pathname: '/login',
                        state: { from: location }
                    }}
                ></Redirect>}
        >

        </Route>
    );
};

export default PrivateRoute;
import React from 'react';
import {
    Redirect,
    Route
} from 'react-router-dom';
import {RouteInterface} from './interface';

const RouteWithSubRoutes = (route: RouteInterface, index: number) => {
    return (
        <Route
            key={index}
            path={route.path}
            exact={true}
            render={props => {
                const token = localStorage.getItem('token');
                const flag = token !== null && token !== '' ? <div/> : <Redirect to={'/login'}/>
                return (<div>
                    <route.component {...props} routes={route.routes}/>
                    {flag}
                </div>)
            }}
        />
    );
}

export {
    RouteWithSubRoutes
}
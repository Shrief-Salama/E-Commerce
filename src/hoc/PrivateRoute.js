import React from 'react'
import { useSelector } from "react-redux";
import { Navigate } from 'react-router-dom'

export function AuthUserRoute({ children }) {
    const isAuth = useSelector(state => state.user.isAuthenticated);

    return isAuth ? <Navigate to='/' /> : children;
}

export function PrivateRoute({ children }) {
    const isAuth = useSelector(state => state.user.isAuthenticated);
    return isAuth ? children : <Navigate to='/myaccount' />
};
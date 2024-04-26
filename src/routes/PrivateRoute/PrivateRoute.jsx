import React, { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom"
import Loading from "../../components/Loading/Loading"
import { AuthContext } from "../AuthProvider/AuthProvider"

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    if (loading) {
        return <Loading></Loading>
    }
    if (!user) {
        return <Navigate to="/login" state={location.pathname}></Navigate>
    }
    return <div>{children}</div>
}

export default PrivateRoute

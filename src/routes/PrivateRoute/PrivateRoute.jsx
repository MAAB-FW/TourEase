import React from "react"
import { Navigate } from "react-router-dom"
import Loading from "../../components/Loading/Loading"

const PrivateRoute = ({ children }) => {
    // const user = false
    // const loading = true
    // if (loading) {
    //     return <Loading></Loading>
    // }
    // if (!user) {
    //     return <Navigate to="/login"></Navigate>
    // }
    return <div>{children}</div>
}

export default PrivateRoute

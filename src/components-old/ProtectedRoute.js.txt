import React from "react"
import { Outlet, Navigate } from "react-router-dom"
import Cookies from "universal-cookie"

// create a protected route class react
function ProtectedRoute() {
    const cookies = new Cookies()

    return cookies.get("jwt_auth") ? <Outlet /> : <Navigate to="/cobra" />
}

export default ProtectedRoute

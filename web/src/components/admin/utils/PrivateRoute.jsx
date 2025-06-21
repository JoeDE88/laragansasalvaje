import { useContext } from "react"
import { Navigate } from "react-router"
import { AdminContext } from "../../../context/AdminContext"

export default function PrivateRoute({ children }) {
    const { token } = useContext(AdminContext)

    if (!token) {
        return <Navigate to='/login' />
    }

    return children
}
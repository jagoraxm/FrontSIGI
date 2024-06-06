import {Navigate, Outlet, useNavigate} from 'react-router-dom';

export const ProtectedRoute = ({isAllowed, children, redirectTo="/login"}) => {

    console.log(isAllowed)
    if(!isAllowed){
        return <Navigate to={redirectTo} replace />
        //return <Navigate to="/"/>
    }

    return children ? children : <Outlet />
}
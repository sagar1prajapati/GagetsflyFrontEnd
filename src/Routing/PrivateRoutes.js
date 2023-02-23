import { Navigate, Outlet } from 'react-router-dom'
const PrivateRoute = () => {
    const token = localStorage.getItem('user-token');
    let auth = false;
    if (token) {
        auth = true;
    } else {
        auth = false;;
    }

return (
    auth ? <Outlet/> : <Navigate to='/login'/>
  )
}

export default PrivateRoute
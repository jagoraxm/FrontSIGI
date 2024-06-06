import React, { useEffect, useState } from 'react';
import {
  Routes,
  Route,
  BrowserRouter,
  useLocation
} from 'react-router-dom';

import './css/style.css';

import './charts/ChartjsConfig';

// Import pages
import Dashboard from './pages/Dashboard';
import Login from './Login';
import Register from './Register';
import { ProtectedRoute } from './components/ProtectedRoute';
import Monitor from './pages/Monitor';

import { useSelector, useDispatch } from 'react-redux';
import { loginAction, logoutAction } from './features/auth/authSlice';

function App() {

  const [userG, setUserG] = useState(null)

  const authState = useSelector(state => state.auth)

  console.log(authState);

  /*const dispatch = useDispatch()
  
  const login = () => {
    console.log('authState --> ', authState)
    const userGd = {
      auth:{ 
        user:{
          id: 1,
          name: "Jon",
          rol: ['admin']
        }}
    }
    setUserG(userGd)

    console.log('userGd ---> ', userGd);
    dispatch(loginAction(userGd))
  };

  const logout = () => {
    
    dispatch(logoutAction(userG.auth.user.id))
    
    setUserG(null);
  }*/

  return (
    <BrowserRouter>
      

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<ProtectedRoute isAllowed={!!authState[0].auth.token}><Dashboard /></ProtectedRoute>} />
          <Route path="/monitor" element={<ProtectedRoute isAllowed={!!authState[0].auth.token}><Monitor /></ProtectedRoute>} />
          {/*<ProtectedRoute isAllowed={!!user}>
            <Monitor1>

            </Monitor1>
          </ProtectedRoute>*/}
        </Routes>      
    </BrowserRouter>
  );
}

export default App;
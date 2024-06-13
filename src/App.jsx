import {
  Routes,
  Route,
  BrowserRouter
} from 'react-router-dom';

import './css/style.css';

import './charts/ChartjsConfig';

// Import pages
import Dashboard from './pages/Dashboard';
import Login from './Login';
import Register from './Register';
import { ProtectedRoute } from './components/ProtectedRoute';
import Monitor from './pages/Monitor';

import { useSelector } from 'react-redux';
import RegisterConfirm from './RegisterConfirm';
import ConfirmEmail from './ConfirmEmail';

function App() {

  const authState = useSelector(state => state.auth)

  console.log(authState);

  return (
    <BrowserRouter>
      

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/confirm/:token" element={<ConfirmEmail />} />
          <Route path="/registerConfirm" element={<RegisterConfirm />} />
          <Route path="/createUser" element={<ProtectedRoute isAllowed={!!authState[0].auth.token}><Monitor param="AddUser" /></ProtectedRoute>} />
          <Route path="/dashboard" element={<ProtectedRoute isAllowed={!!authState[0].auth.token}><Dashboard /></ProtectedRoute>} />
          <Route path="/monitor" element={<ProtectedRoute isAllowed={!!authState[0].auth.token}><Monitor param="DashboardMonitor" /></ProtectedRoute>} />
          {/*<ProtectedRoute isAllowed={!!user}>
            <Monitor1>

            </Monitor1>
          </ProtectedRoute>*/}
        </Routes>      
    </BrowserRouter>
  );
}

export default App;
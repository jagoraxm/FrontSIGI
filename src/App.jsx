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
          <Route path="/createMonitor1" element={<ProtectedRoute isAllowed={!!authState[0].auth.token}><Monitor param="AddMonitor1" /></ProtectedRoute>} />
          <Route path="/dashboard" element={<ProtectedRoute isAllowed={!!authState[0].auth.token}><Dashboard /></ProtectedRoute>} />
          <Route path="/monitor1" element={<ProtectedRoute isAllowed={!!authState[0].auth.token}><Monitor param="DashboardMonitor" /></ProtectedRoute>} />
          <Route path="/monitor2" element={<ProtectedRoute isAllowed={!!authState[0].auth.token}><Monitor param="DashboardMonitor2" /></ProtectedRoute>} />
          <Route path="/monitor3" element={<ProtectedRoute isAllowed={!!authState[0].auth.token}><Monitor param="DashboardMonitor3" /></ProtectedRoute>} />
          <Route path="/monitor4" element={<ProtectedRoute isAllowed={!!authState[0].auth.token}><Monitor param="DashboardMonitor4" /></ProtectedRoute>} />
          <Route path="/monitor5" element={<ProtectedRoute isAllowed={!!authState[0].auth.token}><Monitor param="DashboardMonitor5" /></ProtectedRoute>} />
          <Route path="/monitor6" element={<ProtectedRoute isAllowed={!!authState[0].auth.token}><Monitor param="DashboardMonitor6" /></ProtectedRoute>} />
          {/*<ProtectedRoute isAllowed={!!user}>
            <Monitor1>

            </Monitor1>
          </ProtectedRoute>*/}
        </Routes>      
    </BrowserRouter>
  );
}

export default App;
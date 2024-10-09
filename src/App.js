import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword'; // Assure-toi que le chemin est correct

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> {/* Route par défaut */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        {/* Autres routes */}
      </Routes>
    </Router>
  );
}

export default App;

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    
    // If no token is found, redirect to login page
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div>
      <h1>مرحبًا بك في لوحة التحكم</h1>
      {/* Dashboard content */}
    </div>
  );
}

export default Dashboard;

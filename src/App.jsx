import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import ReviewerDashboard from './Pages/reviewerDashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/reviewer" element={<ReviewerDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;

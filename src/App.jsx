// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import ReviewerDashboard from './Pages/reviewerDashboard';
import AssignedPapersPage from './Pages/AssignedPapersPage';
import PaperReviewPage from './Pages/PaperReviewPage';
import DashboardStats from './components/DashboardStats';
import AssignedPapersTable from './components/AssignedPapersTable';
import AssignedProposalsPage from './Pages/AssignedProposalsPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />

        {/* Reviewer wrapper */}
        <Route path="/reviewer" element={<ReviewerDashboard />}>
          {/* Main reviewer dashboard */}
          <Route
            index
            element={
              <>
                <DashboardStats />
                <AssignedPapersTable />
              </>
            }
          />
          {/* Assigned papers page */}
          <Route path="assigned-papers" element={<AssignedPapersPage />} />
           <Route path="assigned-proposals" element={<AssignedProposalsPage />} />
          {/* Review form */}
          <Route path="review/:paperId" element={<PaperReviewPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

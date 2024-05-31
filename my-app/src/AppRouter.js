import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FrontPage from './componets/FrontPage/FrontPage.js';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="*" element={<FrontPage />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;

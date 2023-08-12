import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Nav/Layout';
import Home from './components/Home'; // Import your Home component
import Confession from './components/Confession';  // Import your Confession component
import Misdemeanours from './components/Misdemeanours';  // Import your Misdemeanours component
import NotFound from './components/NotFound';// Import the NotFound component

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/confession" element={<Layout><Confession /></Layout>} />
        <Route path="/misdemeanours" element={<Layout><Misdemeanours /></Layout>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BlogProvider } from './BlogContext';
import HomePage from './components/Home';
import BlogDetail from './components/BlogDetail';
import CreateBlog from './components/CreateBlog';
import Header from './components/Header';
import './App.css';
import './index.css';

const App = () => {
  return (
    // Provide blogContext to the App.jsx
    <BlogProvider>
      <Router>
        <Header />
        {/* Define the routes for different pages */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/create" element={<CreateBlog />} />
        </Routes>
      </Router>
    </BlogProvider>
  );
};

export default App;

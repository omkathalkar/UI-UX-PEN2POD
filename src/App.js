// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

// Pages
import LoginPage from './pages/LoginPage';
import AuthorDashboard from './pages/AuthorDashboard';
import AuthorNewBook from './pages/AuthorNewBook';
import ListenerDashboard from './pages/ListenerDashboard';
import VoiceArtistDashboard from './pages/VoiceArtistDashboard';

// For demo purposes, we'll add some placeholder pages
const PlaceholderPage = ({ title }) => (
  <div className="placeholder-page">
    <h1>{title}</h1>
    <p>This page is under construction.</p>
    <button onClick={() => window.history.back()}>Go Back</button>
  </div>
);

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          
          {/* Author routes */}
          <Route path="/author-dashboard" element={<AuthorDashboard />} />
          <Route path="/author-new-book" element={<AuthorNewBook />} />
          <Route path="/author-book/:id" element={<PlaceholderPage title="Book Details" />} />
          <Route path="/author-books" element={<PlaceholderPage title="My Books" />} />
          <Route path="/author-audio" element={<PlaceholderPage title="Audio Projects" />} />
          <Route path="/author-analytics" element={<PlaceholderPage title="Analytics" />} />
          <Route path="/author-earnings" element={<PlaceholderPage title="Earnings" />} />
          <Route path="/author-settings" element={<PlaceholderPage title="Settings" />} />
          
          {/* Listener routes */}
          <Route path="/listener-dashboard" element={<ListenerDashboard />} />
          <Route path="/listener-book/:id" element={<PlaceholderPage title="Audiobook Player" />} />
          <Route path="/listener-discover" element={<PlaceholderPage title="Discover" />} />
          <Route path="/listener-favorites" element={<PlaceholderPage title="Favorites" />} />
          <Route path="/listener-playlists" element={<PlaceholderPage title="Playlists" />} />
          <Route path="/listener-history" element={<PlaceholderPage title="History" />} />
          <Route path="/listener-settings" element={<PlaceholderPage title="Settings" />} />
          
          {/* Voice Artist routes */}
          <Route path="/voice-dashboard" element={<VoiceArtistDashboard />} />
          <Route path="/voice-project/:id" element={<PlaceholderPage title="Project Details" />} />
          <Route path="/voice-projects" element={<PlaceholderPage title="My Projects" />} />
          <Route path="/voice-opportunities" element={<PlaceholderPage title="Opportunities" />} />
          <Route path="/voice-earnings" element={<PlaceholderPage title="Earnings" />} />
          <Route path="/voice-profile" element={<PlaceholderPage title="Profile" />} />
          <Route path="/voice-settings" element={<PlaceholderPage title="Settings" />} />
          
          {/* Logout route (for demo, just redirects to login) */}
          <Route path="/logout" element={<Navigate to="/login" />} />
          
          {/* Catch all - redirect to login */}
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
// src/components/Sidebar.js
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Sidebar.css';
import logo from '../assets/pen2pod-logo.png';

const Sidebar = ({ userType }) => {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);
  
  const getMenuItems = () => {
    switch(userType) {
      case 'author':
        return [
          { icon: '📚', label: 'Dashboard', path: '/author-dashboard' },
          { icon: '📝', label: 'My Books', path: '/author-books' },
          { icon: '🎙️', label: 'Audio Projects', path: '/author-audio' },
          { icon: '📊', label: 'Analytics', path: '/author-analytics' },
          { icon: '💰', label: 'Earnings', path: '/author-earnings' },
          { icon: '⚙️', label: 'Settings', path: '/author-settings' },
        ];
      case 'listener':
        return [
          { icon: '🎧', label: 'Library', path: '/listener-dashboard' },
          { icon: '🔍', label: 'Discover', path: '/listener-discover' },
          { icon: '❤️', label: 'Favorites', path: '/listener-favorites' },
          { icon: '📋', label: 'Playlists', path: '/listener-playlists' },
          { icon: '🕰️', label: 'History', path: '/listener-history' },
          { icon: '⚙️', label: 'Settings', path: '/listener-settings' },
        ];
      case 'voice':
        return [
          { icon: '🎙️', label: 'Dashboard', path: '/voice-dashboard' },
          { icon: '📚', label: 'My Projects', path: '/voice-projects' },
          { icon: '💼', label: 'Opportunities', path: '/voice-opportunities' },
          { icon: '💰', label: 'Earnings', path: '/voice-earnings' },
          { icon: '👤', label: 'Profile', path: '/voice-profile' },
          { icon: '⚙️', label: 'Settings', path: '/voice-settings' },
        ];
      default:
        return [];
    }
  };
  
  const menuItems = getMenuItems();
  
  return (
    <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <Link to="/" className="logo-container">
          <img src={logo} alt="PEN2POD Logo" className="logo" />
          {!isCollapsed && <span className="logo-text">PEN2POD</span>}
        </Link>
        <button 
          className="collapse-btn"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? '→' : '←'}
        </button>
      </div>
      
      <nav className="sidebar-nav">
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link 
                to={item.path} 
                className={location.pathname === item.path ? 'active' : ''}
              >
                <span className="menu-icon">{item.icon}</span>
                {!isCollapsed && <span className="menu-label">{item.label}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="sidebar-footer">
        <div className="user-info">
          {!isCollapsed && (
            <>
              <img src="https://via.placeholder.com/40" alt="User" className="user-avatar" />
              <div className="user-details">
                <p className="user-name">John Doe</p>
                <p className="user-type">{
                  userType === 'author' ? 'Author' : 
                  userType === 'listener' ? 'Listener' : 'Voice Artist'
                }</p>
              </div>
            </>
          )}
          {isCollapsed && (
            <img src="https://via.placeholder.com/40" alt="User" className="user-avatar" />
          )}
        </div>
        <Link to="/logout" className="logout-btn">
          <span className="logout-icon">🚪</span>
          {!isCollapsed && <span className="logout-text">Logout</span>}
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
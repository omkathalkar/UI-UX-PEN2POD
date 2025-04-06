// src/pages/LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LoginPage.css';
import logo from '../assets/pen2pod-logo.png';

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [userType, setUserType] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you'd handle authentication here
    
    // For demo purposes, just navigate to the dashboard
    if (userType) {
      navigate(`/${userType.toLowerCase()}-dashboard`);
    } else {
      alert('Please select a user type');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <img src={logo} alt="PEN2POD Logo" className="logo" />
          <h1>PEN2POD</h1>
          <p>AI That Reads with Emotion</p>
        </div>
        
        <div className="tabs">
          <button 
            className={isLogin ? 'active' : ''} 
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button 
            className={!isLogin ? 'active' : ''} 
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="user-type-selection">
            <h3>I am a:</h3>
            <div className="user-type-options">
              <div 
                className={`user-type-option ${userType === 'Author' ? 'selected' : ''}`}
                onClick={() => setUserType('Author')}
              >
                <div className="icon">📚</div>
                <span>Author</span>
              </div>
              
              <div 
                className={`user-type-option ${userType === 'Listener' ? 'selected' : ''}`}
                onClick={() => setUserType('Listener')}
              >
                <div className="icon">🎧</div>
                <span>Listener</span>
              </div>
              
              <div 
                className={`user-type-option ${userType === 'Voice' ? 'selected' : ''}`}
                onClick={() => setUserType('Voice')}
              >
                <div className="icon">🎙️</div>
                <span>Voice Artist</span>
              </div>
            </div>
          </div>
          
          {!isLogin && (
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input 
                type="text" 
                id="name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required 
              />
            </div>
          )}
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>
          
          <button type="submit" className="submit-btn">
            {isLogin ? 'Login' : 'Create Account'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
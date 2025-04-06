// src/pages/VoiceArtistDashboard.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Dashboard.css';
import '../styles/VoiceArtistDashboard.css';
import Sidebar from '../components/Sidebar';

const VoiceArtistDashboard = () => {
  const navigate = useNavigate();
  
  // Demo data - in a real app this would come from an API
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'The Silent Echo',
      author: 'Emily Wright',
      cover: 'https://via.placeholder.com/150x220',
      genre: 'Mystery',
      status: 'In Progress',
      deadline: '2025-04-15',
      progress: 65,
      payment: '$800',
    },
    {
      id: 2,
      title: 'Beyond the Horizon',
      author: 'James Nelson',
      cover: 'https://via.placeholder.com/150x220',
      genre: 'Sci-Fi',
      status: 'Completed',
      deadline: '2025-03-01',
      progress: 100,
      payment: '$650',
    },
    {
      id: 3,
      title: 'Whispers in the Dark',
      author: 'Lisa Khan',
      cover: 'https://via.placeholder.com/150x220',
      genre: 'Thriller',
      status: 'Pending',
      deadline: '2025-05-10',
      progress: 0,
      payment: '$750',
    }
  ]);
  
  // Analytics data
  const analyticsData = {
    totalProjects: projects.length,
    completedProjects: projects.filter(project => project.status === 'Completed').length,
    inProgressProjects: projects.filter(project => project.status === 'In Progress').length,
    pendingProjects: projects.filter(project => project.status === 'Pending').length,
    totalEarnings: '$2,200',
  };
  
  // Job opportunities
  const [opportunities, setOpportunities] = useState([
    {
      id: 1,
      title: 'The Last Symphony',
      author: 'Sarah Chen',
      genre: 'Drama',
      length: 'Approx. 90,000 words',
      budget: '$700-$900',
      deadline: '45 days',
      description: 'Looking for a voice artist with a warm, expressive tone to narrate a character-driven literary drama.',
    },
    {
      id: 2,
      title: 'Forgotten Realms',
      author: 'Michael Torres',
      genre: 'Fantasy',
      length: 'Approx. 120,000 words',
      budget: '$900-$1,200',
      deadline: '60 days',
      description: 'Epic fantasy novel requiring distinct character voices and an engaging narrative style.',
    }
  ]);
  
  return (
    <div className="dashboard-container">
      <Sidebar userType="voice" />
      
      <div className="dashboard-content">
        <div className="dashboard-header">
          <h1>Voice Artist Dashboard</h1>
          <button className="add-new-btn" onClick={() => navigate('/voice-profile')}>
            Edit Profile
          </button>
        </div>
        
        <div className="analytics-cards">
          <div className="analytics-card">
            <h3>Total Projects</h3>
            <p className="analytics-value">{analyticsData.totalProjects}</p>
          </div>
          
          <div className="analytics-card">
            <h3>Completed</h3>
            <p className="analytics-value">{analyticsData.completedProjects}</p>
          </div>
          
          <div className="analytics-card">
            <h3>In Progress</h3>
            <p className="analytics-value">{analyticsData.inProgressProjects}</p>
          </div>
          
          <div className="analytics-card">
            <h3>Pending</h3>
            <p className="analytics-value">{analyticsData.pendingProjects}</p>
          </div>
          
          <div className="analytics-card">
            <h3>Total Earnings</h3>
            <p className="analytics-value">{analyticsData.totalEarnings}</p>
          </div>
        </div>
        
        <div className="voice-profile-summary">
          <div className="voice-profile-header">
            <div className="voice-profile-photo">
              <img src="https://via.placeholder.com/100" alt="Profile" />
            </div>
            <div className="voice-profile-info">
              <h2>Alex Johnson</h2>
              <p className="voice-type">Narrative Voice Artist</p>
              <div className="voice-tags">
                <span className="voice-tag">Drama</span>
                <span className="voice-tag">Mystery</span>
                <span className="voice-tag">Non-Fiction</span>
              </div>
            </div>
          </div>
          <div className="voice-profile-stats">
            <div className="voice-stat">
              <span className="stat-value">4.8</span>
              <span className="stat-label">Rating</span>
            </div>
            <div className="voice-stat">
              <span className="stat-value">12</span>
              <span className="stat-label">Completed</span>
            </div>
            <div className="voice-stat">
              <span className="stat-value">3</span>
              <span className="stat-label">Reviews</span>
            </div>
          </div>
          <div className="voice-profile-actions">
            <button className="voice-sample-btn">
              Play Voice Sample
            </button>
            <button className="edit-profile-btn" onClick={() => navigate('/voice-profile')}>
              Edit Profile
            </button>
          </div>
        </div>
        
        <div className="current-projects-section">
          <div className="section-header">
            <h2>Current Projects</h2>
            <div className="filters">
              <select defaultValue="all">
                <option value="all">All Projects</option>
                <option value="in-progress">In Progress</option>
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
              </select>
            </div>
          </div>
          
          <div className="projects-table">
            <div className="table-header">
              <div className="col-project">Project</div>
              <div className="col-status">Status</div>
              <div className="col-deadline">Deadline</div>
              <div className="col-progress">Progress</div>
              <div className="col-payment">Payment</div>
              <div className="col-actions">Actions</div>
            </div>
            
            {projects.map(project => (
              <div key={project.id} className="table-row">
                <div className="col-project">
                  <div className="project-info">
                    <img src={project.cover} alt={project.title} className="project-cover" />
                    <div>
                      <h4>{project.title}</h4>
                      <p>By {project.author}</p>
                      <span className="genre-badge">{project.genre}</span>
                    </div>
                  </div>
                </div>
                <div className="col-status">
                  <span className={`status-badge status-${project.status.toLowerCase().replace(' ', '-')}`}>
                    {project.status}
                  </span>
                </div>
                <div className="col-deadline">{project.deadline}</div>
                <div className="col-progress">
                  <div className="progress-bar">
                    <div 
                      className="progress-filled" 
                      style={{width: `${project.progress}%`}}
                    ></div>
                  </div>
                  <span className="progress-text">{project.progress}%</span>
                </div>
                <div className="col-payment">{project.payment}</div>
                <div className="col-actions">
                  <button 
                    className="view-project-btn" 
                    onClick={() => navigate(`/voice-project/${project.id}`)}
                  >
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="job-opportunities-section">
          <h2>Available Opportunities</h2>
          <p className="opportunities-info">These projects are looking for voice artists with your profile and skills.</p>
          
          <div className="opportunities-grid">
            {opportunities.map(opportunity => (
              <div key={opportunity.id} className="opportunity-card">
                <div className="opportunity-header">
                  <h3>{opportunity.title}</h3>
                  <span className="genre-badge">{opportunity.genre}</span>
                </div>
                <p className="opportunity-author">By {opportunity.author}</p>
                <div className="opportunity-details">
                  <div className="detail-item">
                    <span className="detail-label">Length:</span>
                    <span className="detail-value">{opportunity.length}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Budget:</span>
                    <span className="detail-value">{opportunity.budget}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Deadline:</span>
                    <span className="detail-value">{opportunity.deadline}</span>
                  </div>
                </div>
                <p className="opportunity-description">{opportunity.description}</p>
                <div className="opportunity-actions">
                  <button className="view-details-btn">View Details</button>
                  <button className="apply-btn">Apply</button>
                </div>
              </div>
            ))}
            
            <div className="opportunity-card find-more-card" onClick={() => navigate('/voice-opportunities')}>
              <div className="find-more-icon">🔍</div>
              <p>Find More Opportunities</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoiceArtistDashboard;
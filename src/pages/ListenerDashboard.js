// src/pages/ListenerDashboard.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Dashboard.css';
import '../styles/ListenerDashboard.css';
import Sidebar from '../components/Sidebar';
import AudiobookCard from '../components/AudiobookCard';

const ListenerDashboard = () => {
  const navigate = useNavigate();
  
  // Demo data - in a real app this would come from an API
  const [audiobooks, setAudiobooks] = useState([
    {
      id: 1,
      title: 'The Silent Echo',
      author: 'Emily Wright',
      cover: 'https://via.placeholder.com/150x220',
      genre: 'Mystery',
      duration: '8h 42m',
      progress: 65,
      releaseDate: '2025-03-01',
    },
    {
      id: 2,
      title: 'Beyond the Horizon',
      author: 'James Nelson',
      cover: 'https://via.placeholder.com/150x220',
      genre: 'Sci-Fi',
      duration: '6h 15m',
      progress: 30,
      releaseDate: '2025-02-15',
    },
    {
      id: 3,
      title: 'The Last Symphony',
      author: 'Sarah Chen',
      cover: 'https://via.placeholder.com/150x220',
      genre: 'Drama',
      duration: '10h 20m',
      progress: 0,
      releaseDate: '2025-03-20',
    },
    {
      id: 4,
      title: 'Forgotten Realms',
      author: 'Michael Torres',
      cover: 'https://via.placeholder.com/150x220',
      genre: 'Fantasy',
      duration: '12h 33m',
      progress: 90,
      releaseDate: '2025-01-10',
    },
    {
      id: 5,
      title: 'Whispers in the Dark',
      author: 'Lisa Khan',
      cover: 'https://via.placeholder.com/150x220',
      genre: 'Thriller',
      duration: '7h 45m',
      progress: 15,
      releaseDate: '2025-03-05',
    }
  ]);
  
  // Analytics data
  const analyticsData = {
    totalBooks: audiobooks.length,
    booksCompleted: audiobooks.filter(book => book.progress === 100).length,
    booksInProgress: audiobooks.filter(book => book.progress > 0 && book.progress < 100).length,
    totalListeningTime: 45, // hours
    favoriteGenre: 'Mystery',
  };
  
  // Currently playing book (if any)
  const currentlyPlaying = audiobooks.find(book => book.id === 1);
  
  return (
    <div className="dashboard-container">
      <Sidebar userType="listener" />
      
      <div className="dashboard-content">
        <div className="dashboard-header">
          <h1>Your Audiobook Library</h1>
          <button className="primary-btn" onClick={() => navigate('/listener-discover')}>
            Discover New Audiobooks
          </button>
        </div>
        
        {currentlyPlaying && (
          <div className="now-playing-section">
            <h2>Continue Listening</h2>
            <div className="now-playing-card">
              <div className="now-playing-cover">
                <img src={currentlyPlaying.cover} alt={currentlyPlaying.title} />
              </div>
              <div className="now-playing-info">
                <h3>{currentlyPlaying.title}</h3>
                <p className="now-playing-author">By {currentlyPlaying.author}</p>
                <div className="progress-container">
                  <div className="progress-bar">
                    <div 
                      className="progress-filled" 
                      style={{width: `${currentlyPlaying.progress}%`}}
                    ></div>
                  </div>
                  <p className="progress-text">{currentlyPlaying.progress}% completed</p>
                </div>
              </div>
              <div className="now-playing-controls">
                <button className="play-btn">
                  <span className="play-icon">▶</span>
                  Resume
                </button>
              </div>
            </div>
          </div>
        )}
        
        <div className="analytics-cards">
          <div className="analytics-card">
            <h3>Library</h3>
            <p className="analytics-value">{analyticsData.totalBooks}</p>
          </div>
          
          <div className="analytics-card">
            <h3>Completed</h3>
            <p className="analytics-value">{analyticsData.booksCompleted}</p>
          </div>
          
          <div className="analytics-card">
            <h3>In Progress</h3>
            <p className="analytics-value">{analyticsData.booksInProgress}</p>
          </div>
          
          <div className="analytics-card">
            <h3>Listening Time</h3>
            <p className="analytics-value">{analyticsData.totalListeningTime}h</p>
          </div>
          
          <div className="analytics-card">
            <h3>Favorite Genre</h3>
            <p className="analytics-value">{analyticsData.favoriteGenre}</p>
          </div>
        </div>
        
        <div className="section-header">
          <h2>Your Library</h2>
          <div className="filters">
            <select defaultValue="all">
              <option value="all">All Books</option>
              <option value="in-progress">In Progress</option>
              <option value="not-started">Not Started</option>
              <option value="completed">Completed</option>
            </select>
            
            <select defaultValue="all">
              <option value="all">All Genres</option>
              <option value="mystery">Mystery</option>
              <option value="fantasy">Fantasy</option>
              <option value="sci-fi">Sci-Fi</option>
              <option value="drama">Drama</option>
              <option value="thriller">Thriller</option>
            </select>
            
            <input type="text" placeholder="Search library..." className="search-input" />
          </div>
        </div>
        
        <div className="audiobooks-grid">
          {audiobooks.map(book => (
            <AudiobookCard 
              key={book.id} 
              book={book} 
              onClick={() => navigate(`/listener-book/${book.id}`)}
            />
          ))}
        </div>
        
        <div className="recommendations-section">
          <h2>Recommended for You</h2>
          <div className="recommendations-carousel">
            <button className="carousel-nav prev">❮</button>
            <div className="recommendations-items">
              <div className="recommendation-item">
                <img src="https://via.placeholder.com/120x180" alt="Recommended book" />
                <h4>The Midnight Library</h4>
                <p>Matt Haig</p>
              </div>
              <div className="recommendation-item">
                <img src="https://via.placeholder.com/120x180" alt="Recommended book" />
                <h4>Project Hail Mary</h4>
                <p>Andy Weir</p>
              </div>
              <div className="recommendation-item">
                <img src="https://via.placeholder.com/120x180" alt="Recommended book" />
                <h4>The Invisible Life of Addie LaRue</h4>
                <p>V.E. Schwab</p>
              </div>
              <div className="recommendation-item">
                <img src="https://via.placeholder.com/120x180" alt="Recommended book" />
                <h4>Klara and the Sun</h4>
                <p>Kazuo Ishiguro</p>
              </div>
            </div>
            <button className="carousel-nav next">❯</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListenerDashboard;
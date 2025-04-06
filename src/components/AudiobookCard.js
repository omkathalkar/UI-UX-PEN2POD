// src/components/AudiobookCard.js
import React from 'react';
import '../styles/AudiobookCard.css';

const AudiobookCard = ({ book, onClick }) => {
  return (
    <div className="audiobook-card" onClick={onClick}>
      <div className="audiobook-cover-container">
        <img 
          src={book.cover} 
          alt={book.title} 
          className="audiobook-cover"
        />
        {book.progress > 0 && book.progress < 100 && (
          <div className="progress-label">
            {book.progress}%
          </div>
        )}
        {book.progress === 100 && (
          <div className="completed-label">
            Completed
          </div>
        )}
        <button className="play-button">
          <span className="play-icon">▶</span>
        </button>
      </div>
      <div className="audiobook-info">
        <h3 className="audiobook-title">{book.title}</h3>
        <p className="audiobook-author">By {book.author}</p>
        <div className="audiobook-details">
          <span className="genre-badge">{book.genre}</span>
          <span className="duration-badge">{book.duration}</span>
        </div>
        {book.progress > 0 && (
          <div className="audiobook-progress">
            <div 
              className="audiobook-progress-filled" 
              style={{width: `${book.progress}%`}}
            ></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AudiobookCard;
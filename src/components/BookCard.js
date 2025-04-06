// src/components/BookCard.js
import React from 'react';

const BookCard = ({ book, userType, onClick }) => {
  // Calculate background color based on audio status
  const getAudioStatusColor = (status) => {
    switch(status) {
      case 'Completed':
        return '#e6f7ee';
      case 'In Progress':
        return '#ebf8ff';
      case 'Not Started':
        return '#fff8e6';
      default:
        return '#f7fafc';
    }
  };
  
  // Calculate text color based on audio status
  const getAudioStatusTextColor = (status) => {
    switch(status) {
      case 'Completed':
        return '#38a169';
      case 'In Progress':
        return '#3182ce';
      case 'Not Started':
        return '#d69e2e';
      default:
        return '#718096';
    }
  };
  
  return (
    <div className="book-card" onClick={onClick}>
      <img 
        src={book.cover} 
        alt={book.title} 
        className="book-cover"
      />
      <div className="book-info">
        <h3>{book.title}</h3>
        <p className="book-genre">{book.genre}</p>
        <p className="book-status">
          Status: <strong>{book.status}</strong>
        </p>
        
        {userType === 'author' && (
          <>
            <div 
              className="audio-status" 
              style={{ 
                backgroundColor: getAudioStatusColor(book.audioStatus),
                color: getAudioStatusTextColor(book.audioStatus)
              }}
            >
              <span>Audio: {book.audioStatus}</span>
            </div>
            
            {book.audioStatus === 'In Progress' && (
              <div className="book-progress">
                <div 
                  className="book-progress-filled" 
                  style={{width: '60%'}}
                ></div>
              </div>
            )}
            
            <div className="book-stats">
              <div className="book-stat">
                <span className="stat-value">{book.totalListens}</span>
                <span className="stat-label">Listens</span>
              </div>
              <div className="book-stat">
                <span className="stat-value">{book.lastUpdated}</span>
                <span className="stat-label">Updated</span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default BookCard;
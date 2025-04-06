// src/pages/AuthorDashboard.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Dashboard.css';
import Sidebar from '../components/Sidebar';
import BookCard from '../components/BookCard';

const AuthorDashboard = () => {
  const navigate = useNavigate();
  
  // Demo data - in a real app this would come from an API
  const [books, setBooks] = useState([
    {
      id: 1,
      title: 'The Silent Echo',
      cover: 'https://via.placeholder.com/150x220',
      genre: 'Mystery',
      status: 'Published',
      audioStatus: 'Completed',
      totalListens: 1245,
      lastUpdated: '2025-03-15',
    },
    {
      id: 2,
      title: 'Midnight Dreams',
      cover: 'https://via.placeholder.com/150x220',
      genre: 'Fantasy',
      status: 'Draft',
      audioStatus: 'In Progress',
      totalListens: 0,
      lastUpdated: '2025-04-01',
    },
    {
      id: 3,
      title: 'Beyond the Horizon',
      cover: 'https://via.placeholder.com/150x220',
      genre: 'Sci-Fi',
      status: 'Published',
      audioStatus: 'Not Started',
      totalListens: 567,
      lastUpdated: '2025-02-28',
    }
  ]);
  
  // Analytics data
  const analyticsData = {
    totalBooks: books.length,
    totalPublished: books.filter(book => book.status === 'Published').length,
    totalAudioBooks: books.filter(book => book.audioStatus === 'Completed').length,
    totalListens: books.reduce((sum, book) => sum + book.totalListens, 0),
    timeSpent: 128, // hours
  };
  
  const handleAddNewBook = () => {
    navigate('/author-new-book');
  };
  
  return (
    <div className="dashboard-container">
      <Sidebar userType="author" />
      
      <div className="dashboard-content">
        <div className="dashboard-header">
          <h1>Author Dashboard</h1>
          <button className="add-new-btn" onClick={handleAddNewBook}>
            Add New Book
          </button>
        </div>
        
        <div className="analytics-cards">
          <div className="analytics-card">
            <h3>Total Books</h3>
            <p className="analytics-value">{analyticsData.totalBooks}</p>
          </div>
          
          <div className="analytics-card">
            <h3>Published</h3>
            <p className="analytics-value">{analyticsData.totalPublished}</p>
          </div>
          
          <div className="analytics-card">
            <h3>Audiobooks</h3>
            <p className="analytics-value">{analyticsData.totalAudioBooks}</p>
          </div>
          
          <div className="analytics-card">
            <h3>Total Listens</h3>
            <p className="analytics-value">{analyticsData.totalListens}</p>
          </div>
          
          <div className="analytics-card">
            <h3>Time Spent</h3>
            <p className="analytics-value">{analyticsData.timeSpent} hrs</p>
          </div>
        </div>
        
        <div className="section-header">
          <h2>My Books</h2>
          <div className="filters">
            <select defaultValue="all">
              <option value="all">All Books</option>
              <option value="published">Published</option>
              <option value="drafts">Drafts</option>
            </select>
            
            <select defaultValue="all">
              <option value="all">All Genres</option>
              <option value="mystery">Mystery</option>
              <option value="fantasy">Fantasy</option>
              <option value="sci-fi">Sci-Fi</option>
            </select>
          </div>
        </div>
        
        <div className="books-grid">
          {books.map(book => (
            <BookCard 
              key={book.id} 
              book={book} 
              userType="author"
              onClick={() => navigate(`/author-book/${book.id}`)}
            />
          ))}
          
          <div className="book-card add-book-card" onClick={handleAddNewBook}>
            <div className="add-icon">+</div>
            <p>Add New Book</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorDashboard;
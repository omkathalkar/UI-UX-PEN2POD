// src/pages/AuthorNewBook.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/NewBook.css';
import Sidebar from '../components/Sidebar';

const AuthorNewBook = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('details');
  
  const [bookDetails, setBookDetails] = useState({
    title: '',
    genre: '',
    description: '',
    coverImage: null,
    coverPreview: null,
    manuscript: null,
    manuscriptName: '',
  });
  
  const [audioSettings, setAudioSettings] = useState({
    narratorVoice: 'natural1',
    emotionalTone: 'balanced',
    pacing: 50,
    pitch: 50,
    backgroundMusic: false,
    musicType: 'none',
  });
  
  const handleBookDetailsChange = (e) => {
    const { name, value } = e.target;
    setBookDetails({
      ...bookDetails,
      [name]: value
    });
  };
  
  const handleCoverUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setBookDetails({
        ...bookDetails,
        coverImage: file,
        coverPreview: URL.createObjectURL(file)
      });
    }
  };
  
  const handleManuscriptUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setBookDetails({
        ...bookDetails,
        manuscript: file,
        manuscriptName: file.name
      });
    }
  };
  
  const handleAudioSettingsChange = (e) => {
    const { name, value, type, checked } = e.target;
    setAudioSettings({
      ...audioSettings,
      [name]: type === 'checkbox' ? checked : value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would submit the form data to your backend
    
    // For demo purposes, just navigate back to the dashboard
    alert('Book created successfully!');
    navigate('/author-dashboard');
  };
  
  return (
    <div className="dashboard-container">
      <Sidebar userType="author" />
      
      <div className="dashboard-content">
        <div className="dashboard-header">
          <h1>Create New Book</h1>
        </div>
        
        <div className="new-book-tabs">
          <button 
            className={activeTab === 'details' ? 'active' : ''} 
            onClick={() => setActiveTab('details')}
          >
            Book Details
          </button>
          <button 
            className={activeTab === 'audio' ? 'active' : ''} 
            onClick={() => setActiveTab('audio')}
          >
            Audio Settings
          </button>
          <button 
            className={activeTab === 'preview' ? 'active' : ''} 
            onClick={() => setActiveTab('preview')}
          >
            Preview
          </button>
        </div>
        
        <form className="new-book-form" onSubmit={handleSubmit}>
          {activeTab === 'details' && (
            <div className="book-details-tab">
              <div className="two-column-grid">
                <div className="form-column">
                  <div className="form-group">
                    <label htmlFor="title">Book Title</label>
                    <input 
                      type="text" 
                      id="title" 
                      name="title"
                      value={bookDetails.title}
                      onChange={handleBookDetailsChange}
                      required 
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="genre">Genre</label>
                    <select 
                      id="genre" 
                      name="genre"
                      value={bookDetails.genre}
                      onChange={handleBookDetailsChange}
                      required
                    >
                      <option value="">Select Genre</option>
                      <option value="mystery">Mystery</option>
                      <option value="romance">Romance</option>
                      <option value="fantasy">Fantasy</option>
                      <option value="sci-fi">Science Fiction</option>
                      <option value="thriller">Thriller</option>
                      <option value="non-fiction">Non-Fiction</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="description">Book Description</label>
                    <textarea 
                      id="description" 
                      name="description"
                      value={bookDetails.description}
                      onChange={handleBookDetailsChange}
                      rows="5"
                      required 
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="manuscript">Upload Manuscript (PDF, DOCX, TXT)</label>
                    <div className="file-upload-container">
                      <input 
                        type="file" 
                        id="manuscript" 
                        name="manuscript"
                        onChange={handleManuscriptUpload}
                        accept=".pdf,.docx,.txt"
                        required 
                      />
                      {bookDetails.manuscriptName && (
                        <p className="file-name">{bookDetails.manuscriptName}</p>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="cover-upload-column">
                  <div className="cover-upload">
                    <label>Book Cover</label>
                    <div className="cover-preview">
                      {bookDetails.coverPreview ? (
                        <img src={bookDetails.coverPreview} alt="Book cover preview" />
                      ) : (
                        <div className="cover-placeholder">
                          <span>Click to upload cover</span>
                        </div>
                      )}
                      <input 
                        type="file" 
                        id="coverImage" 
                        name="coverImage"
                        onChange={handleCoverUpload}
                        accept="image/*"
                        className="cover-input"
                      />
                    </div>
                    <p className="cover-help">Recommended size: 1400 x 2100 pixels</p>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'audio' && (
            <div className="audio-settings-tab">
              <div className="audio-settings-section">
                <h3>Voice Settings</h3>
                
                <div className="form-group">
                  <label htmlFor="narratorVoice">Narrator Voice</label>
                  <select 
                    id="narratorVoice" 
                    name="narratorVoice"
                    value={audioSettings.narratorVoice}
                    onChange={handleAudioSettingsChange}
                  >
                    <option value="natural1">Natural Voice 1</option>
                    <option value="natural2">Natural Voice 2</option>
                    <option value="dramatic1">Dramatic Voice 1</option>
                    <option value="dramatic2">Dramatic Voice 2</option>
                    <option value="calm1">Calm Voice 1</option>
                    <option value="calm2">Calm Voice 2</option>
                  </select>
                  <button type="button" className="preview-voice-btn">Preview Voice</button>
                </div>
                
                <div className="form-group">
                  <label htmlFor="emotionalTone">Emotional Tone</label>
                  <select 
                    id="emotionalTone" 
                    name="emotionalTone"
                    value={audioSettings.emotionalTone}
                    onChange={handleAudioSettingsChange}
                  >
                    <option value="balanced">Balanced</option>
                    <option value="dramatic">Dramatic</option>
                    <option value="subtle">Subtle</option>
                    <option value="intense">Intense</option>
                    <option value="neutral">Neutral</option>
                  </select>
                </div>
              </div>
              
              <div className="audio-settings-sliders">
                <div className="form-group slider-group">
                  <label htmlFor="pacing">Pacing</label>
                  <div className="slider-with-value">
                    <input 
                      type="range" 
                      id="pacing" 
                      name="pacing"
                      min="0" 
                      max="100" 
                      value={audioSettings.pacing}
                      onChange={handleAudioSettingsChange}
                    />
                    <span className="slider-value">{audioSettings.pacing}%</span>
                  </div>
                  <div className="slider-labels">
                    <span>Slower</span>
                    <span>Faster</span>
                  </div>
                </div>
                
                <div className="form-group slider-group">
                  <label htmlFor="pitch">Pitch</label>
                  <div className="slider-with-value">
                    <input 
                      type="range" 
                      id="pitch" 
                      name="pitch"
                      min="0" 
                      max="100" 
                      value={audioSettings.pitch}
                      onChange={handleAudioSettingsChange}
                    />
                    <span className="slider-value">{audioSettings.pitch}%</span>
                  </div>
                  <div className="slider-labels">
                    <span>Lower</span>
                    <span>Higher</span>
                  </div>
                </div>
              </div>
              
              <div className="audio-settings-section">
                <h3>Background Music</h3>
                
                <div className="form-group checkbox-group">
                  <input 
                    type="checkbox" 
                    id="backgroundMusic" 
                    name="backgroundMusic"
                    checked={audioSettings.backgroundMusic}
                    onChange={handleAudioSettingsChange}
                  />
                  <label htmlFor="backgroundMusic">Add background music</label>
                </div>
                
                {audioSettings.backgroundMusic && (
                  <div className="form-group">
                    <label htmlFor="musicType">Music Type</label>
                    <select 
                      id="musicType" 
                      name="musicType"
                      value={audioSettings.musicType}
                      onChange={handleAudioSettingsChange}
                    >
                      <option value="none">None</option>
                      <option value="ambient">Ambient</option>
                      <option value="dramatic">Dramatic</option>
                      <option value="cheerful">Cheerful</option>
                      <option value="mysterious">Mysterious</option>
                      <option value="suspenseful">Suspenseful</option>
                    </select>
                    <button type="button" className="preview-voice-btn">Preview Music</button>
                  </div>
                )}
              </div>
              
              <div className="audio-settings-section advanced-settings">
                <h3>Advanced Settings</h3>
                <p>Fine-tune your audiobook with character voices, sound effects, and more.</p>
                <button type="button" className="advanced-settings-btn">
                  Configure Advanced Settings
                </button>
              </div>
            </div>
          )}
          
          {activeTab === 'preview' && (
            <div className="preview-tab">
              <div className="preview-section">
                <h3>Book Preview</h3>
                <div className="preview-container">
                  <div className="book-preview">
                    <div className="preview-cover">
                      {bookDetails.coverPreview ? (
                        <img src={bookDetails.coverPreview} alt="Book cover" />
                      ) : (
                        <div className="cover-placeholder small">
                          <span>No cover</span>
                        </div>
                      )}
                    </div>
                    <div className="preview-details">
                      <h3>{bookDetails.title || 'Untitled Book'}</h3>
                      <p className="preview-genre">{bookDetails.genre || 'No genre selected'}</p>
                      <p className="preview-description">
                        {bookDetails.description || 'No description provided.'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="preview-section">
                <h3>Audio Preview</h3>
                <div className="audio-preview-container">
                  <p>Listen to a sample of your audiobook with the selected settings:</p>
                  <div className="audio-player">
                    <button type="button" className="play-btn">
                      Play Sample
                    </button>
                    <div className="audio-waveform">
                      {/* Placeholder for audio waveform */}
                      <div className="waveform-placeholder"></div>
                    </div>
                    <div className="audio-settings-summary">
                      <p><strong>Voice:</strong> {audioSettings.narratorVoice.replace(/(\d+)$/, ' $1')}</p>
                      <p><strong>Tone:</strong> {audioSettings.emotionalTone}</p>
                      <p><strong>Pacing:</strong> {audioSettings.pacing}%</p>
                      <p><strong>Pitch:</strong> {audioSettings.pitch}%</p>
                      <p><strong>Music:</strong> {audioSettings.backgroundMusic ? audioSettings.musicType : 'None'}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <div className="form-actions">
            <button 
              type="button" 
              className="cancel-btn"
              onClick={() => navigate('/author-dashboard')}
            >
              Cancel
            </button>
            
            {activeTab === 'preview' ? (
              <button type="submit" className="submit-btn">
                Create Book
              </button>
            ) : (
              <button 
                type="button" 
                className="next-btn"
                onClick={() => setActiveTab(activeTab === 'details' ? 'audio' : 'preview')}
              >
                Next
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthorNewBook;
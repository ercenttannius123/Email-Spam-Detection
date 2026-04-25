import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [emailText, setEmailText] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handlePredict = async (e) => {
    e.preventDefault();
    
    if (!emailText.trim()) {
      setError('Please enter an email text');
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await axios.post('http://localhost:5000/predict', {
        text: emailText
      });

      setResult(response.data);
    } catch (err) {
      setError(err.response?.data?.error || 'Error connecting to API. Make sure the server is running on http://localhost:5000');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setEmailText('');
    setResult(null);
    setError(null);
  };

  return (
    <div className="app-container">
      <div className="card">
        <h1 className="title">📧 Email Spam Detector</h1>
        <p className="subtitle">Detect spam emails using AI</p>

        <form onSubmit={handlePredict}>
          <div className="form-group">
            <label htmlFor="emailText">Enter Email Text:</label>
            <textarea
              id="emailText"
              value={emailText}
              onChange={(e) => setEmailText(e.target.value)}
              placeholder="Paste your email text here..."
              rows="6"
              disabled={loading}
            />
          </div>

          <div className="button-group">
            <button 
              type="submit" 
              className="btn btn-primary"
              disabled={loading}
            >
              {loading ? 'Analyzing...' : 'Predict'}
            </button>
            <button 
              type="button" 
              className="btn btn-secondary"
              onClick={handleClear}
              disabled={loading}
            >
              Clear
            </button>
          </div>
        </form>

        {error && (
          <div className="alert alert-error">
            ⚠️ {error}
          </div>
        )}

        {result && (
          <div className={`alert alert-${result.prediction === 'SPAM' ? 'spam' : 'not-spam'}`}>
            <h2>Result</h2>
            <p className="result-label">Prediction:</p>
            <p className={`result-value ${result.prediction === 'SPAM' ? 'spam' : 'not-spam'}`}>
              {result.prediction}
            </p>
            <hr />
            <p className="result-label">Email Text:</p>
            <p className="result-text">{result.email}</p>
          </div>
        )}

        {loading && (
          <div className="loader">
            <div className="spinner"></div>
            <p>Analyzing email...</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ setUser }) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const url = "https://flatmates-confesion-git-main-yash-maskes-projects-93f4ac16.vercel.app";

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${url}/api/user/login`, { name, password });
      setUser(res.data.name);
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      background: 'linear-gradient(to bottom right, #d9f99d, #ffffff, #bbf7d0)',
      padding: '1rem'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '400px',
        padding: '2rem',
        backgroundColor: 'white',
        borderRadius: '1.5rem',
        boxShadow: '0 8px 30px rgba(0, 128, 0, 0.1)',
        transition: 'transform 0.3s'
      }}>
        <h1 style={{
          fontSize: '2rem',
          fontWeight: 800,
          textAlign: 'center',
          marginBottom: '1.5rem',
          color: '#15803d',
          textShadow: '0 0 4px #4ade80' // Approximate glow
        }}>
          🌿 Flat Confession Login
        </h1>
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '0.6rem 1rem',
              border: '1px solid #86efac',
              borderRadius: '0.5rem',
              fontSize: '1rem',
              transition: 'border 0.2s, box-shadow 0.2s'
            }}
          />
          <input
            type="password"
            placeholder="Shared Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '0.6rem 1rem',
              border: '1px solid #86efac',
              borderRadius: '0.5rem',
              fontSize: '1rem',
              transition: 'border 0.2s, box-shadow 0.2s'
            }}
          />
          {error && (
            <p style={{
              color: 'red',
              fontSize: '0.9rem',
              textAlign: 'center',
              animation: 'shake 0.3s ease-in-out' // Needs CSS keyframe, skip or approximate
            }}>
              {error}
            </p>
          )}
          <button type="submit" style={{
            backgroundColor: '#16a34a',
            color: 'white',
            fontWeight: 600,
            padding: '0.6rem',
            border: 'none',
            borderRadius: '0.5rem',
            cursor: 'pointer',
            transition: 'background-color 0.3s, box-shadow 0.2s'
          }}>
            🚪 Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

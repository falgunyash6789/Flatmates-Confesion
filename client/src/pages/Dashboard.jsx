import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserCard from '../components/UserCard';

const users = [
  'Yash Maske',
  'Yash Deshmukh',
  'Nirbhay Chukekar',
  'Parth Chandurkar',
  'Rahul Solanke',
  'Vedant Pasarkar',
  'Athrav Timane',
  'Chinmay Tidke',
];

const Dashboard = ({ user }) => {
  const [messages, setMessages] = useState([]);
  const url = "https://flatmates-confesion-git-main-yash-maskes-projects-93f4ac16.vercel.app";

  const fetchMessages = async () => {
    try {
      const res = await axios.get(`${url}/api/user/all`);
      setMessages(res.data);
    } catch (error) {
      console.error('Failed to fetch messages:', error);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div style={{
      padding: '1rem',
      minHeight: '100vh',
      background: 'linear-gradient(to top right, #f0fdf4, #ffffff, #dcfce7)',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{
        fontSize: '2rem',
        fontWeight: 'bold',
        color: '#15803d',
        marginBottom: '1.5rem'
      }}>
        👋 Welcome, <span style={{ color: '#000' }}>{user}</span>
      </h1>

      {/* User Cards Section */}
      <div style={{
        display: 'grid',
        gap: '1.5rem',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        marginBottom: '2.5rem'
      }}>
        {users.map((name) => (
          <UserCard key={name} toUser={name} fetchMessages={fetchMessages} />
        ))}
      </div>

      {/* Confessions Section */}
      <h2 id="confessions" style={{
        fontSize: '1.5rem',
        fontWeight: 600,
        color: '#166534',
        marginBottom: '1rem',
        scrollMarginTop: '5rem'
      }}>
        🕵️ Anonymous Confessions
      </h2>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
      }}>
        {messages.length > 0 ? (
          messages.map((msg) => (
            <div key={msg._id} style={{
              padding: '1rem',
              background: '#fff',
              border: '1px solid #bbf7d0',
              borderRadius: '12px',
              boxShadow: '0 2px 6px rgba(0, 0, 0, 0.06)',
              transition: 'box-shadow 0.3s ease'
            }}>
              <p style={{ fontSize: '0.875rem', color: '#4b5563', marginBottom: '0.5rem' }}>
                <strong style={{ color: '#15803d' }}>To:</strong> {msg.toUser}
              </p>
              <p style={{ fontSize: '1rem', color: '#1f2937' }}>{msg.message}</p>
              <p style={{
                textAlign: 'right',
                fontSize: '0.75rem',
                color: '#9ca3af',
                marginTop: '0.5rem'
              }}>
                {new Date(msg.timestamp).toLocaleString()}
              </p>
            </div>
          ))
        ) : (
          <p style={{ color: '#6b7280', fontStyle: 'italic' }}>No confessions yet. 😶</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;

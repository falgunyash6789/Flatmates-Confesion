import React, { useState } from 'react';
import axios from 'axios';
import { MessageSquare } from 'lucide-react';

const UserCard = ({ toUser, fetchMessages }) => {
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);
  const url = "https://flatmates-confesion-git-main-yash-maskes-projects-93f4ac16.vercel.app";

  const sendMessage = async () => {
    if (!message) return;
    await axios.post(`${url}/api/user/send`, {
      toUser,
      message,
    });
    setMessage('');
    fetchMessages();
    setSent(true);
    setTimeout(() => setSent(false), 1000);
  };

  const scrollToDashboardMessages = () => {
    const section = document.getElementById('confessions');
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerStyle = {
    position: 'relative',
    maxWidth: '400px',
    margin: '20px auto',
    padding: '20px',
    border: '1px solid #e2e8f0',
    borderRadius: '15px',
    background: 'linear-gradient(to bottom right, #ffffff, #f0fdf4, #dcfce7)',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    animation: sent ? 'pulseOnce 0.8s ease-in-out' : 'fadeInUp 0.5s ease forwards',
    transition: 'transform 0.5s ease',
    transform: sent ? 'scale(1.03)' : 'scale(1)',
  };

  const iconBtnStyle = {
    position: 'absolute',
    top: '12px',
    right: '12px',
    background: 'none',
    border: 'none',
    color: '#16a34a',
    cursor: 'pointer',
    transition: 'color 0.3s ease',
  };

  const titleStyle = {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    color: '#15803d',
    marginBottom: '12px',
  };

  const recipientStyle = {
    color: '#000',
  };

  const textareaStyle = {
    width: '100%',
    padding: '10px 14px',
    border: '1px solid #86efac',
    borderRadius: '10px',
    outline: 'none',
    fontSize: '1rem',
    resize: 'none',
    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
    transition: 'box-shadow 0.3s, border-color 0.3s',
  };

  const sendBtnStyle = {
    marginTop: '12px',
    width: '100%',
    backgroundColor: '#22c55e',
    color: 'white',
    fontWeight: 600,
    padding: '10px 0',
    borderRadius: '10px',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
    boxShadow: '0 3px 6px rgba(34, 197, 94, 0.3)',
  };

  return (
    <div style={containerStyle}>
      <button
        onClick={scrollToDashboardMessages}
        style={iconBtnStyle}
        title="View Confessions"
        onMouseEnter={(e) => (e.target.style.color = '#15803d')}
        onMouseLeave={(e) => (e.target.style.color = '#16a34a')}
      >
        <MessageSquare size={20} />
      </button>

      <h2 style={titleStyle}>
        Confess to: <span style={recipientStyle}>{toUser}</span>
      </h2>

      <textarea
        rows="3"
        placeholder="Write your confession..."
        style={textareaStyle}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onFocus={(e) => {
          e.target.style.borderColor = '#22c55e';
          e.target.style.boxShadow = '0 2px 6px rgba(34, 197, 94, 0.2)';
        }}
        onBlur={(e) => {
          e.target.style.borderColor = '#86efac';
          e.target.style.boxShadow = '0 1px 2px rgba(0, 0, 0, 0.05)';
        }}
      />

      <button
        onClick={sendMessage}
        style={sendBtnStyle}
        onMouseEnter={(e) => (e.target.style.backgroundColor = '#16a34a')}
        onMouseLeave={(e) => (e.target.style.backgroundColor = '#22c55e')}
      >
        ✉️ Send Confession
      </button>
    </div>
  );
};

export default UserCard;

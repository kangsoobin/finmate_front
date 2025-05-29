// src/components/ChatBubble.js
import React from 'react';

const ChatBubble = ({ type, text }) => {
  const isUser = type === 'user';

  return (
    <div style={{
      display: 'flex',
      justifyContent: isUser ? 'flex-end' : 'flex-start',
      marginBottom: 10
    }}>
      <div style={{
        maxWidth: '70%',
        padding: '10px 15px',
        borderRadius: 20,
        background: isUser ? '#71BDEF' : '#F1F1F1',
        color: isUser ? 'white' : 'black',
        fontSize: 16,
      }}>
        {text}
      </div>
    </div>
  );
};

export default ChatBubble;

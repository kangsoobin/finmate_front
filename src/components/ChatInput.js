// src/components/ChatInput.js
import React, { useState } from 'react';
import { FiSend } from 'react-icons/fi';

const ChatInput = ({ onSend }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = value.trim();
    if (!trimmed) return;
    onSend(trimmed);
    setValue('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        position: 'fixed',
        bottom: 50,
        left: 470, // 사이드바 너비 고려
        right: 150,
        display: 'flex',
        background: '#FBFBFB',
        borderRadius: 30,
        border: '1px solid #E2E2E2',
        boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
        padding: '40px 30px',
        alignItems: 'center',
        zIndex: 100,
      }}
    >
      <input
        type="text"
        placeholder="답변을 입력하세요"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{
          flex: 1,
          border: 'none',
          outline: 'none',
          fontSize: 16,
          background: 'transparent',
        }}
      />
      <button type="submit" style={{
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 32,
        height: 32,
        borderRadius: '50%',
        backgroundColor: '#308BC5',
      }}>
        <FiSend size={16} color="white" />
      </button>
    </form>
  );
};

export default ChatInput;

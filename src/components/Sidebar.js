// components/Sidebar.js
import React from 'react';

const Sidebar = ({ activeTab, onTabChange }) => {
  const tabs = [
    { key: 'chatbot', label: 'Chatbot' },
    { key: 'report', label: 'Report' },
    { key: 'mypage', label: 'My Page' },
  ];

  return (
    <div style={{ width: 260, background: '#F7FAFC', padding: 20 }}>
      <div style={{ color: '#308BC5', fontSize: 20, fontWeight: 700, marginBottom: 40 }}>
        FinMate
      </div>
      {tabs.map((tab) => (
        <div
          key={tab.key}
          onClick={() => onTabChange(tab.key)}
          style={{
            padding: '10px',
            marginBottom: 10,
            borderRadius: 8,
            background: activeTab === tab.key ? '#E7F1F8' : 'transparent',
            fontWeight: 500,
            cursor: 'pointer',
          }}
        >
          {tab.label}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;

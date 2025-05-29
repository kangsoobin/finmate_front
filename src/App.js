//전체 라우팅
// App.js
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ChatBot from './components/ChatBot';
import ReportPage from './components/ReportPage';

const App = () => {
  const [activeTab, setActiveTab] = useState('chatbot');

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      <div style={{ flex: 1, background: '#fff' }}>
        {activeTab === 'chatbot' && <ChatBot />}
        {activeTab === 'report' && <ReportPage />}
        {activeTab === 'mypage' && <div>My Page 준비 중</div>}
        
      </div>
    </div>
  );
};

export default App;

//전체 라우팅
// App.js
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ChatBot from './components/ChatBot';
import ReportPage from './components/ReportPage';
import Login from "./components/Login";
import { useAuth } from "./auth/AuthContext";
import AuthSuccess from "./auth/AuthSuccess";
import { logout } from "./auth/AuthActions";
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from 'react-router-dom';


const Layout = ({ activeTab, setActiveTab, onLogout }) => (
    <div style={{display: 'flex', height: '100vh', overflow: 'hidden'}}>
        <Sidebar activeTab={activeTab} onTabChange={setActiveTab} onLogout={onLogout}/>
        <div style={{flex: 1, background: '#fff', overflowY: 'auto'}}>
            {activeTab === 'chatbot' && <ChatBot/>}
            {activeTab === 'report' && <ReportPage/>}
            {activeTab === 'mypage' && <div>My Page 준비 중</div>}
        </div>
    </div>
)
const App = () => {
    const {state, dispatch} = useAuth();
    const [activeTab, setActiveTab] = useState('chatbot');

    const handleLogout = () => {
        logout(dispatch); // 액세스 토큰 제거 + 로그인 상태 변경
    };

    return (
        <Routes>
            <Route path="/social-success" element={<AuthSuccess />} />
            {!state.isLoggedIn ? (
                <>
                    <Route path="*" element={<Login />} />
                </>
            ) : (
                <>
                    <Route path="/" element={<Layout activeTab={activeTab} setActiveTab={setActiveTab} onLogout={handleLogout}/>} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </>
            )}
        </Routes>
  );
};

export default App;

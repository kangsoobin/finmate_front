import React from 'react';
import '../css/Login.css'; // CSS 별도 관리 추천

function Login() {
    const KAKAO_AUTH_URL =
        `https://finmate-sever-fveackd3frd4hthh.koreacentral-01.azurewebsites.net/oauth2/authorization/kakao`;

    const handleKakaoLogin = () => {
        window.location.href = KAKAO_AUTH_URL;
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>자산 관리, <span className="highlight">FinMate</span>와 함께 해요 💰</h2>
                <button className="kakao-login-btn" onClick={handleKakaoLogin}>
                    카카오로 로그인하기
                </button>
            </div>
        </div>
    );
}

export default Login;

import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function AuthSuccess() {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        console.log("AuthAccess 진입 성공");
        console.log("localtion.search = ", location.search);

        const params = new URLSearchParams(location.search);
        const accessToken = params.get('accessToken');
        console.log(accessToken);

        if (accessToken) {
            // localStorage에 토큰 저장
            localStorage.setItem('accessToken', accessToken);

            // 메인 페이지로 리다이렉트
            navigate('/');
        } else {
            // 토큰이 없는 경우 에러 처리
            console.error('Login failed: No tokens received');
            navigate('/login');
        }
    }, [navigate, location]);

    return <div>Processing login...</div>;
}

export default AuthSuccess;
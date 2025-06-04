import axios from 'axios';

export const api = axios.create({
    baseURL: 'https:/finmate-sever-fveackd3frd4hthh.koreacentral-01.azurewebsites.net/api/v1',
    headers: {
        'Content-Type': 'application/json'
    }
});

const setAxiosInterceptor = () => {
    // 요청 인터셉터 : Rest API 요청 시 AccessToken 추가
    api.interceptors.request.use(
        (config) => {
            const accessToken = localStorage.getItem('accessToken');
            console.log(accessToken)
            if (accessToken) {
                config.headers['Authorization'] = accessToken;
            }
            return config;
        },
        (error) => Promise.reject(error)
    );

    // 응답 인터셉터: 401 처리
    api.interceptors.response.use(
        (response) => response,
        (error) => {
            if (error.response && error.response.status === 401) {
                alert('로그인이 만료되었습니다. 다시 로그인해주세요.');
                localStorage.removeItem('accessToken'); // 로그아웃 처리
                window.location.href = '/login'; // 로그인 페이지로 이동
            }
            return Promise.reject(error); // 에러를 계속 throw
        }
    );
}

setAxiosInterceptor();
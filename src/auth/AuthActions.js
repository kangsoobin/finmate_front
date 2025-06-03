export function logout(dispatch) {
    localStorage.removeItem('accessToken');
    dispatch({ type: 'LOGOUT' });
    alert("로그인 화면으로 이동합니다.");
}
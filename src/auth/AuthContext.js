import React, {createContext, useReducer, useContext, useEffect} from 'react';

const AuthContext = createContext();

const initialState = {
    isLoggedIn: false,
    accessToken: null
};

// 로그인 성공 시 상태 깅신
function authReducer(state, action) {
    switch (action.type) {
        case 'SET_LOGIN_STATE':
            return {
                ...state,
                isLoggedIn: true,
                accessToken: action.payload.accessToken,
            };
        case 'LOGOUT':
            return {
                ...initialState
            };
        default:
            return state;
    }
}

// 자식 컴포넌트에 로그인 상태 제공
export function AuthProvider({ children }) {
    const [state, dispatch] = useReducer(authReducer, initialState);
    useEffect(() => {
        const isLoggedIn = true
        const accessToken = localStorage.getItem('accessToken');

        if (accessToken) {
            dispatch({
                type: 'SET_LOGIN_STATE',
                payload: { isLoggedIn, accessToken}
            });
        }
    }, []);

    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
}

// 자식 컴포넌트에
export function useAuth() {
    return useContext(AuthContext);
}

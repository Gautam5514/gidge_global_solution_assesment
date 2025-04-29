import React, { createContext, useState, useContext } from 'react';

// Create the context
const AuthContext = createContext();

// AuthProvider component to wrap the app with context provider
export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('token') || null);

    const login = (token) => {
        localStorage.setItem('token', token);
        setToken(token);
    };

    const logout = () => {
        localStorage.removeItem('token');
        setToken(null);
    };

    return (
        <AuthContext.Provider value={{ token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to use the AuthContext easily
export const useAuth = () => useContext(AuthContext);

// Export AuthContext if needed (but `useAuth` is the recommended way to consume the context)
export default AuthContext;

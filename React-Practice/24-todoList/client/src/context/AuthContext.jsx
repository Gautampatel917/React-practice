import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create context
const AuthContext = createContext();

// Auth provider
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);

    // Register user
    const registerUser = async (name, email, password, cpassword) => {
        try {
            const response = await axios.post('/auth/register', { name, email, password, cpassword });
            setToken(response.data.token); // Set token
            setUser(response.data.user); // Set user details
            // Store token in localStorage or cookie (for persistence)
            localStorage.setItem('token', response.data.token);
        } catch (error) {
            console.error(error.response?.data || error);
        }
    };

    // Login user
    const loginUser = async (email, password) => {
        try {
            const response = await axios.post('/auth/login', { email, password });
            setToken(response.data.token); // Set token
            setUser(response.data.user); // Set user details
            // Store token in localStorage or cookie
            localStorage.setItem('token', response.data.token);
        } catch (error) {
            console.error(error.response?.data || error);
        }
    };

    // Logout user
    const logoutUser = () => {
        setToken(null);
        setUser(null);
        // Remove token from localStorage or cookie
        localStorage.removeItem('token');
    };

    // Set user from localStorage on load
    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            setToken(storedToken);
            // Fetch user data by token
            axios.get('/user/me', {
                headers: { Authorization: `Bearer ${storedToken}` },
            })
                .then(response => setUser(response.data))
                .catch(err => console.error('User fetch error:', err));
        }
    }, []);

    return (
        <AuthContext.Provider value={{ user, token, registerUser, loginUser, logoutUser }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to use auth context
export const useAuth = () => useContext(AuthContext);
import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext({});

function AuthContextProvider({ children }) {
    const [isAuth, setIsAuth] = useState({isAuth: false, username: ''});
    const navigate = useNavigate();

    function login(email) {
        setIsAuth({isAuth: true, username: email});
        console.log('Gebruiker is ingelogd!');
        // navigate('/profile');
    }

    function logout() {
       setIsAuth({isAuth: false, username: ''});
        console.log('Gebruiker is uitgelogd!');
        navigate('/');
    }



    const contextData = {
        isAuth: isAuth,
        logIn: login,
        logOut: logout,
        user: isAuth.username,
    };

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;
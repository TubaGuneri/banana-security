import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext({});

function AuthContextProvider({ children }) {
    const [isAuth, setIsAuth] = useState({isAuth: false, user: ''});
    const navigate = useNavigate();

    function login() {
        setIsAuth({isAuth: true, user: email});
        console.log('Gebruiker is ingelogd!');
        navigate('/profile');
    }

    function logout() {
       setIsAuth({isAuth: false, user: ''});
        console.log('Gebruiker is uitgelogd!');
        navigate('/');
    }



    const contextData = {
        isAuth: isAuth,
        logIn: login,
        logOut: logout,
        user: isAuth.user,
    };

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;
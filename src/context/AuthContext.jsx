import React, {createContext, useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {jwtDecode} from "jwt-decode";
import axios from "axios";
import isTokenValid from "../helpers/IsTokenValid";

export const AuthContext = createContext({});

function AuthContextProvider({ children }) {
    const [isAuth, setIsAuth] = useState({isAuth: false, username: null});
   useEffect(() => {
   //     is er een token? controleren:
       const token = localStorage.getItem('token');
       console.log("here");
   //     is die token geldig? controleren:
       if (token && isTokenValid(token)){
           void login(token);
       } else {

       }

   },[]);
    const navigate = useNavigate();

   async function login(token) {
       console.log('Token to decode: ', token);

       localStorage.setItem('token', token);
       const decodedToken = jwtDecode(token);
       console.log(decodedToken.sub);

       try {
           //  informatie over deze gebruiker ophalen.
           const response = await axios.get(`http://localhost:3000/600/user/${decodedToken.sub}`, {
               headers: {
                   "Content-Type": "application/json",
                   Authorization: `Bearer ${token}`,
               }
           })

           console.log(response);
           // als we dit hebben sla dan op in de state

           setIsAuth({
               isAuth: true,
               user: {
                   username: response.data.username,
                   email: response.data.email,
                   id: response.data.id,
               }
           });
           navigate('/profile');
       } catch (e) {
           // mislukt log de gebruiker uit!
           logout();
       }

   }

    function logout() {
       setIsAuth({
           isAuth: false,
           username: null});
        console.log('Gebruiker is uitgelogd!');
        navigate('/');
    }



    const contextData = {
        isAuth: isAuth,
        logIn: login,
        logOut: logout,
    };

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;
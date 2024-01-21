import {useState} from "react";
import {useNavigate} from "react-router-dom";

export function AuthContextProvider({children}) {
    const [isAuth, setIsAuth] = useState(false);
    const navigate = useNavigate();

    function setAuthTrue() {
        setIsAuth(true)
    }

    function setAuthFalse() {
        setIsAuth(false)
    }

    function logOut() {
        console.log('Gebruiker is uitgelogd');
        setIsAuth(false);
        navigate('/')
    }

    function logIn() {
        console.log('gebruiker is gelogd');
        setIsAuth(true);
        navigate('/profile')
    }

    const data= {
        isAuth: isAuth,
        logOut: logOut,
        logIn: logIn,

    }

    return(
        <AuthContextProvider value={data}>
            {children}
        </AuthContextProvider>
    )
}
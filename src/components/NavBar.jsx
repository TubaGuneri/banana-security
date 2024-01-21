import React, {useContext} from 'react';
import logo from '../assets/banana-01.png';
import { useNavigate, Link } from 'react-router-dom';
import {AuthContextProvider} from "../context/AuthContext";

function NavBar() {
  const navigate = useNavigate();
  const{isAuth, logOut, logIn} = useContext(AuthContextProvider)
console.log(isAuth)

  useEffect(() => {

  }, []);
  return (

      <nav>
        <Link to="/">
          <span className="logo-container">
            <img src={logo} alt="logo"/>
            <h3>
              Banana Security
            </h3>
          </span>
        </Link>

      <div>
        <button
          type="button"
          onClick={() => logIn()}
        >

          Log in
        </button>
        <button
          type="button"
          onClick={() => navigate('/signup')}
        >
          Registreren
        </button>
      </div>

      {isAuth === true &&
      <button
          type='button'
          onClick={() => logOut()}

      >
        Log uit
      </button>
      }

    </nav>

  );
}

export default NavBar;
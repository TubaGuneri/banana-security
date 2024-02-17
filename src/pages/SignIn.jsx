import React, {useContext, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import axios from "axios";



function SignIn() {
    const {logIn} = useContext(AuthContext);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const baseUrl = 'http://localhost:3000';
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        logIn();
        void requestLogIn(formData);
    }
    function handleChange(e) {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

        async function requestLogIn(formData) {
            try {
                const response = await axios.post(`${baseUrl}/login`, {
                    email: formData.email,
                    password: formData.password,
                })
                console.log(response.data.accessToken);
            } catch (e) {
                console.error(e)
            } finally {
                navigate('/profile');
            }

        }

        return (
            <>
                <h1>Inloggen</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id
                    molestias qui quo unde?</p>

                <form onSubmit={handleSubmit}>

                    <label htmlFor='email'>Email
                        <input
                            type='email'
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </label>

                    <label htmlFor='password'>Password
                        <input
                            type='password'
                            name='password'
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </label>


                    <button type="submit" onClick={handleSubmit}>Inloggen</button>
                </form>

                <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
            </>
        );

}
export default SignIn;
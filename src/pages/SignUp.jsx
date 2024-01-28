import React, {useContext, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {AuthContext} from "../context/AuthContext";
import axios from "axios";

function SignUp() {

    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
//     const { login } = useContext(AuthContext);
    const [formData, setFormData] = useState({
            username: '',
            email:'',
            password:'',
        });
    const navigate= useNavigate();
    const baseUrl= 'http://localhost:3000';
    function handleSubmit (e){
        e.preventDefault();
        console.log(formData);
        // navigate('/signin');
void register();
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
            }));
    };

    async function register() {
        console.log('voor de post request')
        try {
            const response = await axios.post (`${baseUrl}/register`, {
                username: formData.username,
                    email: formData.email,
                    password: formData.password,
            });
            console.log('response', response)

        }catch (e) {
console.error (e)
        } finally{
            navigate('/signin');
        }
    }

  return (
    <>
      <h1>Registreren</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque consectetur, dolore eaque eligendi
        harum, numquam, placeat quisquam repellat rerum suscipit ullam vitae. A ab ad assumenda, consequuntur deserunt
        doloremque ea eveniet facere fuga illum in numquam quia reiciendis rem sequi tenetur veniam?</p>

        <form onSubmit={handleSubmit}>
          <label>User Name
          <input
              type='text'
              name='username'
              value = {formData.username}
              onChange ={handleChange}
          />
          </label>

            <label>Email
                <input
                    type='email'
                    name='email'
                    value = {formData.email}
                    onChange ={handleChange}
                />
            </label>

            <label>Password
                <input
                    type='password'
                    name='password'
                    value = {formData.password}
                    onChange ={handleChange}
                />
            </label>

            <button type='submit' onClick={() => handleSubmit}>Registreren</button>
      </form>
      <p>Heb je al een account? Je kunt je <Link to="/signin">hier</Link> inloggen.</p>
    </>
  );
}

export default SignUp;
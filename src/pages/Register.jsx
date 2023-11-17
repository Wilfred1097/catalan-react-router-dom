import React from 'react'
import Nav from '../components/Nav';
import { RegisterSchema } from '../Validations/UserValidation.js';

function Register() {
    const RegisterUser = async (event) => {
        event.preventDefault()
        let formData = {
            name: event.target[0].value,
            username: event.target[1].value,
            email: event.target[2].value,
            password: event.target[3].value,
            confirmpassword: event.target[4].value,
        };

        RegisterSchema.validate(formData)
        .then(validatedData => {
            const { username } = validatedData;
            window.alert(`User "${username}" Registered Succesfully`);
            console.log(formData)
        })
        .catch(validationError => {
            window.alert(validationError.message);
        });
    };

  return (
    <div>
      <img className='logo' src="src/assets/react.svg" alt="" />
      <img className='logo' src="vite.svg" alt="" />
      <h2>REGISTER</h2>
      <form onSubmit={RegisterUser}>
        <label htmlFor="name">Name: </label>
        <input type="text" id="name"/>
        <label htmlFor="username">Username: </label>
        <input type="text" id="username"/>
        <label htmlFor="email">Email: </label>
        <input type="text" id="email"/>
        <label htmlFor="password">Password: </label>
        <input type="text" id="password"/>
        <label htmlFor="confirmpassword">Confirm Password: </label>
        <input type="text" id="confirmpassword"/>
        <input className='button' type="submit" value="Register"></input>
      </form>
      <a href='/'>Already have an account? Login Here</a>
    </div>
  )
}

export default Register

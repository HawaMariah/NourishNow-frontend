// src/SignUp.js
import React, { useState } from 'react';
import { useCookies } from 'react-cookie';

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cookies, setCookie, removeCookie] = useCookies(['user']);

  
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://127.0.0.1:5000/signUp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name:name,
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data as needed
        setCookie('user', JSON.stringify(data), { path: '/' });
        console.log(cookies.user);
        alert("Sign up success!");
        
      })
      .catch((error) => {
        // Handle errors here
        console.error(error);
      });
   
    
   
    
    ;
  };

  return (
    <div className="sign-up">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="name"
            id="name"
            name="na,e"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;

// src/SignIn.js
import React, { useState } from 'react';
import { useCookies } from 'react-cookie';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cookies, setCookie, removeCookie] = useCookies(['user']);


  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://127.0.0.1:5000/signIn', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data as needed
        setCookie('user', JSON.stringify(data), { path: '/' });
        console.log(cookies.user);
        alert("Sign In success!");
        
      })
      .catch((error) => {
        // Handle errors here
        console.error(error);
      });
    

   
    
    ;
  };

  return (
    <div className="sign-in">
      <h2>Sign In</h2>
      
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default SignIn;

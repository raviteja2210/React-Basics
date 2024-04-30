import React, { useState } from 'react';

function SignupForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword]= useState('')

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange=(event)=>{
    setConfirmPassword(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can implement your signup logic, like sending the username, email, and password to a server for registration
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('ConfirmPassword:', confirmpassword);
    if(username.length <=5){
      alert("username atleast 5 character")
    }
    else if(password!=confirmpassword){
      alert("password not matching")
    }
    // After successful signup, you might want to redirect the user or perform some other action
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div>
          <label>ConfirmPassword: </label>
          <input type="password" id='confirm password' value={confirmpassword} onChange={handleConfirmPasswordChange} />
          {password!=confirmpassword ? <p> password not matching</p> : null}
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignupForm;

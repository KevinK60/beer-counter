/*
  Currently experiencing issues with functionality.
  We have a file named 'fetchblog.js' in our project, serving as our Node server responsible for fetching data.
  
  Assistance in troubleshooting and resolving the issue is needed.
  fetchblog.js is gonna be huge file 
  And will be to need moved to server folder 

*/
import React, { useState } from 'react';
import './style.css'
const SignUpForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            minLength="3" // Minimum length validation
            maxLength={200}
          />
          {/* Display error message for invalid username */}
          {/* Add your validation logic here */}
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {/* Display error message for invalid email */}
          {/* Add your validation logic here */}
        </div>
        
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            minLength="6" // Minimum length validation
          />
          {/* Display error message for invalid password */}
          {/* Add your validation logic here */}
        </div>
        
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;

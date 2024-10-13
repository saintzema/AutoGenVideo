// src/components/SignUpPage.js
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const location = useLocation();
  const selectedPlan = new URLSearchParams(location.search).get('plan');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, create account, process payment
    console.log('Sign up with:', email, password, selectedPlan);
  };

  const handleGoogleSignIn = () => {
    // Implement Google Sign-In
    console.log('Sign in with Google');
  };

  return (
    <div className="container mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Sign Up for {selectedPlan} Plan</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full p-2 mb-4 border rounded"
        />
        <button type="submit" className="w-full bg-indigo-600 text-white p-2 rounded">
          Sign Up
        </button>
      </form>
      <div className="mt-4">
        <button onClick={handleGoogleSignIn} className="w-full bg-red-500 text-white p-2 rounded">
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default SignUpPage;
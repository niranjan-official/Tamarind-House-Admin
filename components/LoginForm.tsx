'use client'
import React from "react";
export const LoginForm = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [rememberMe, setRememberMe] = React.useState(false); 

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Remember Me:', rememberMe); 
  };

  return (
    <form onSubmit={handleSubmit} className="pt-4">
      <input
        type="text"
        id="username"
        value={username}
        onChange={handleUsernameChange}
        className="block mx-auto border border-gray-400 p-2 rounded-md mt-1"
        placeholder="Username" 
      />
      <input
        type="password"
        id="password"
        value={password}
        onChange={handlePasswordChange}
        className="block mx-auto border border-gray-400 p-2 rounded-md mt-4" 
        placeholder="Password" 
      />
      <div className="flex items-center mt-4 ">
        <input
          type="checkbox"
          id="rememberMe"
          checked={rememberMe}
          onChange={handleRememberMeChange}
          className="mr-2"
        />
        <label htmlFor="rememberMe" className="font-poppins text-sm text-red-500">Remember me</label>
      </div>
      <button type="submit" className="block mx-auto bg-red-700 text-white px-4 py-2 mt-6 rounded-md">Login</button>
    </form>
  );
};

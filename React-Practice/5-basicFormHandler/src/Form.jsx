import React, { useState } from 'react';

const Form = () => {
  const [username, setUsername] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username.trim() === '') {
      alert('Please enter a username');
      return;
    }
    console.log('Submitted username:', username);
    setUsername(''); // clear input
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={handleUsernameChange}
        placeholder="Enter your username"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
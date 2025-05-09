import React, { useMemo, useState } from 'react'
import { useAuth } from '../context/AuthContext';

function Register() {
  const { registerUser } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser(name, email, password, cpassword);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <input type="password" placeholder="Confirm Password" value={cpassword} onChange={(e) => setCpassword(e.target.value)} />
      <button type="submit">Register</button>
    </form>
  )
}

export default Register
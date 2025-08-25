import React, { useState } from 'react';
import '../../css/Login.css';
import API from '../../api';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate=useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success,setSuccess]=useState('')
  const [err,setErr]=useState('')
  const handleSubmit = async(e) => {
    e.preventDefault();
    // Your login logic here
      try{
        const res=await API.post('/user/login',{email,password});
        console.log(res)
        if(res.data.token){
          localStorage.setItem("token",res.data.token)
        }
        setSuccess(res.data.message)
        navigate('/posts')
      }catch(error){
        const message=error.response?.data?.message || error;
        setErr(message)
      }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign In</button>
        {success && <p>{success}</p>}
        {err && <p>{err}</p>}
      </form>
    </div>
  );
}

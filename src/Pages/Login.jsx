import React, { useState } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, auth } from '../firebase';
import { useNavigate } from 'react-router';


export function Login() {
const [isSignup, setIsSignup] = useState(false);
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [error, setError] = useState(null);
const navigate = useNavigate();


const handleSubmit = async (e) => {
e.preventDefault();
setError(null);
try {
if (isSignup) {
await createUserWithEmailAndPassword(auth, email, password);
} else {
await signInWithEmailAndPassword(auth, email, password);
}
navigate('/bookings');
} catch (err) {
setError(err.message);
}
};


return (
<div className="container login-page">
<div className="login-card">
<h2>{isSignup ? 'Create account' : 'Login'}</h2>
<form onSubmit={handleSubmit}>
<label>Email</label>
<input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required />
<label>Password</label>
<input value={password} onChange={(e) => setPassword(e.target.value)} type="password" required />


{error && <div className="error">{error}</div>}


<button className="btn primary" type="submit">{isSignup ? 'Sign up' : 'Login'}</button>
</form>


<div className="login-footer">
<button className="btn link" onClick={() => setIsSignup((s) => !s)}>{isSignup ? 'Have an account? Login' : "Don't have an account? Sign up"}</button>
</div>
</div>
</div>
);
}
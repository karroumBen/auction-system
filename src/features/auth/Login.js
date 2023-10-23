import React, { useState } from 'react';
import './Login.css';

const Login = ({ onLogin, onNavigateToRegistration }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Handle login logic here
        onLogin({ email, password });
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="input-field" />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-field"
            />
            <button onClick={handleLogin} className="login-button">
                Login
            </button>
            <p className="register-link" onClick={onNavigateToRegistration}>
                Don't have an account? Register here
            </p>
        </div>
    );
};

export default Login;

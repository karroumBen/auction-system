import React, { useState } from 'react';
import './Registration.css';

const Registration = ({ onRegister }) => {
    const [email, setEmail] = useState('');
    const [licenseNumber, setLicenseNumber] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState('customer'); // Default user type set to customer

    const handleRegister = () => {
        // Handle registration logic here
        onRegister({ email, licenseNumber, password, userType });
    };

    return (
        <div className="registration-container">
            <h2>Registration</h2>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="input-field" />
            <input
                type="text"
                placeholder="License Number"
                value={licenseNumber}
                onChange={(e) => setLicenseNumber(e.target.value)}
                className="input-field"
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-field"
            />

            <div className="select-container">
                <label for="userType">Choose User Type:</label>
                <select id="userType" onChange={(e) => setUserType(e.target.value)} className="select-field">
                    <option value="customer">Customer</option>
                    <option value="seller">Seller</option>
                </select>
            </div>

            <button onClick={handleRegister} className="register-button">
                Register
            </button>
        </div>
    );
};

export default Registration;

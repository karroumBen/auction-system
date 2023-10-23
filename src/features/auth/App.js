import React, { useState } from 'react';
import Login from './Login';
import Registration from './Registration';

function App() {
    const [page, setPage] = useState('login');
    const [userType, setUserType] = useState(null);

    const handleRegister = (data) => {
        // Handle registration logic here
        console.log('Registration Data:', data);
    };

    const handleLogin = (data) => {
        // Handle login logic here
        console.log('Login Data:', data);
    };

    const handleUserSelect = (type) => {
        setUserType(type);
        setPage('registration');
    };

    if (page === 'login') {
        return <Login onNavigateToRegistration={() => setPage('registration')} onLogin={handleLogin} />;
    } else if (page === 'registration') {
        return <Registration userType={userType} onRegister={handleRegister} />;
    }
}

export default App;

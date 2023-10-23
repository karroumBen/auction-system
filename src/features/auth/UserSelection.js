// UserSelection.js

import React from 'react';

const UserSelection = ({ onSelect }) => {
    const handleSelection = (userType) => {
        onSelect(userType);
    };

    return (
        <div className="user-selection-container">
            <h2>Choose User Type</h2>
            <button onClick={() => handleSelection('customer')} className="user-type-button">
                Register as Customer
            </button>
            <button onClick={() => handleSelection('seller')} className="user-type-button">
                Register as Seller
            </button>
        </div>
    );
};

export default UserSelection;

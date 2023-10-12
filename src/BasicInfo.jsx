import React, { useState } from "react";

function BasicInfo(props) {
    const {
        phone,
        address,
        email,
        name,
        handleNameChange,
        handleEmailChange,
        handlePhoneChange,
        handleAddressChange,
        
      } = props;


    return (
        <>
            <h2>Basic Info</h2>
            <label>
                First name:{' '}
                <input
                    value={name}
                    onChange={handleNameChange}
                />
            </label>
            <label>
                Email:{' '}
                <input
                    value={email}
                    onChange={handleEmailChange}
                />
            </label>

            <label>
                Phone:{' '}
                <input
                    value={phone}
                    onChange={handlePhoneChange}
                />
            </label>

            <label>
                Address:{' '}
                <input
                    value={address}
                    onChange={handleAddressChange}
                />
            </label>

        </>
    );
}



export { BasicInfo };
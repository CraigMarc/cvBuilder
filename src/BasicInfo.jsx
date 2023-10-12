import React, { useState } from "react";

function BasicInfo() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }

    function handlePhoneChange(e) {
        setPhone(e.target.value);
    }

    function handleAddressChange(e) {
        setAddress(e.target.value);
    }


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


            <p>
                Name: <b>{name}</b>
                Email: <b>{email}</b>
                Phone: <b>{phone}</b>
                Address: <b>{address}</b>
            </p>
        </>
    );
}



export { BasicInfo };
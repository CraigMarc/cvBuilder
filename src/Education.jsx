import React, { useState } from "react";

function Education(props) {
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
            <h2>Education</h2>
            <label>
                School Name:{' '}
                <input
                    value={schoolName}
                    onChange={handleNameChange}
                />
            </label>
            <label>
                Degree:{' '}
                <input
                    value={degree}
                    onChange={handleEmailChange}
                />
            </label>

            <label>
                Field of Study:{' '}
                <input
                    value={fos}
                    onChange={handlePhoneChange}
                />
            </label>

            <label>
                Start Date:{' '}
                <input
                    value={startDate}
                    onChange={handleAddressChange}
                />
            </label>
            <label>
                End Date:{' '}
                <input
                    value={endDate}
                    onChange={handleAddressChange}
                />
            </label>
            
            <label>
                Location:{' '}
                <input
                    value={location}
                    onChange={handleAddressChange}
                />
            </label>
        </>
    );
}



export { Education };
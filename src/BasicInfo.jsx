import React, { useState } from "react";

function BasicInfo(props) {
    const {
        basicData,
        handleBasicChange,
               
      } = props;


    return (
        <>
            <h2>Basic Info</h2>
            <div className="basicContainer">
            <label>
                First name {' '}
                <input
                    type="text"
                    value={basicData.name }
                    name="name"
                    onChange={handleBasicChange}
                />
            </label>
            <label>
                Email {' '}
                <input
                    type="email"
                    value={basicData.email }
                    name="email"
                    onChange={handleBasicChange}
                />
            </label>

            <label>
                Phone {' '}
                <input
                    type="phone"
                    value={basicData.phone }
                    name="phone"
                    onChange={handleBasicChange}
                />
            </label>

            <label>
                Address {' '}
                <input
                    type="text"
                    value={basicData.address }
                    name="address"
                    onChange={handleBasicChange}
                />
            </label>
            </div>
        </>
    );
}



export { BasicInfo };
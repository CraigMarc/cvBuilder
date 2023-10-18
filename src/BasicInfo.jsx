import React, { useState } from "react";

function BasicInfo(props) {
    const {
        basicData,
        handleSchoolChange,
               
      } = props;


    return (
        <>
            <h2>Basic Info</h2>
            <label>
                First name:{' '}
                <input
                    value={basicData.name }
                    name="name"
                    onChange={handleSchoolChange}
                />
            </label>
            <label>
                Email:{' '}
                <input
                    value={basicData.email }
                    name="email"
                    onChange={handleSchoolChange}
                />
            </label>

            <label>
                Phone:{' '}
                <input
                    value={basicData.phone }
                    name="phone"
                    onChange={handleSchoolChange}
                />
            </label>

            <label>
                Address:{' '}
                <input
                    value={basicData.address }
                    name="address"
                    onChange={handleSchoolChange}
                />
            </label>

        </>
    );
}



export { BasicInfo };
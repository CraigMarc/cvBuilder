import React, { useState } from "react";

function Education(props) {
    const {
        schoolData,
        handleSchoolChange,
        handleSchoolSubmit,
        
    } = props;


    return (
        <>
            <h2>Education</h2>
            <form onSubmit={handleSchoolSubmit}>
            <label>
                School Name:{' '}
                <input
                    type="text" 
                    name="schoolName" 
                    value={schoolData.schoolName } 
                    onChange={handleSchoolChange}
                />
            </label>
            <label>
                Degree:{' '}
                <input
                    type="text" 
                    name="degree"
                    value={schoolData.degree} 
                    onChange={handleSchoolChange}
                />
            </label>

            <label>
                Field of Study:{' '}
                <input
                    type="text" 
                    name="fos"
                    value={schoolData.fos} 
                    onChange={handleSchoolChange}
                />
            </label>

            <label>
                Start Date:{' '}
                <input
                    type="text" 
                    name="startDate"
                    value={schoolData.startDate} 
                    onChange={handleSchoolChange}
                />
            </label>
            <label>
                End Date:{' '}
                <input
                    type="text" 
                    name="endDate"
                    value={schoolData.endDate} 
                    onChange={handleSchoolChange}
                />
            </label>
            
            <label>
                Location:{' '}
                <input
                    type="text" 
                    name="location"
                    value={schoolData.location} 
                    onChange={handleSchoolChange}
                />
            </label>
            <input type="submit" />
            </form>
        </>
    );
}



export { Education };
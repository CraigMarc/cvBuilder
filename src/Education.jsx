import React, { useState } from "react";

function Education(props) {
    const {
        schoolData,
        handleDelete,
        handleSchoolSubmit,
        handleEdit,

    } = props;



        const listSchools = schoolData.map(data =>
            <div key={data.id}>
                <p className="title">{data.schoolName}</p>
                
                <div className="buttonContainer">
                <button className="delete" value={data.id} onClick={handleDelete}>delete</button>
                <button className="edit" value={data.id} onClick={handleEdit}>edit</button>
                </div>
                
            </div>
    
            )
       

    return (
        <>
            <h2>Education Form</h2>
            <div className="educationContainer">
            <form id="edForm" onSubmit={handleSchoolSubmit}>
                <label>
                    School Name:{' '}
                    <input
                        id="schoolName"
                        type="text"
                        name="schoolName"
                        placeholder="school name"
                        required
                      
                    />
                </label>
                <label>
                    Degree:{' '}
                    <input
                        id="degree"
                        type="text"
                        name="degree"
                        placeholder="degree"
                        required
                      
                    />
                </label>

                <label>
                    Field of Study:{' '}
                    <input
                        id="fos"
                        type="text"
                        name="fos"
                        placeholder="Field of Study"
                     
                    />
                </label>

                <label>
                    Start Date:{' '}
                    <input
                        id="startDate"
                        type="date"
                        name="startDate"
                     
                    />
                </label>
                <label>
                    End Date:{' '}
                    <input
                        id="endDate"
                        type="date"
                        name="endDate"
                     
                    />
                </label>

                <label>
                    Location:{' '}
                    <input
                        id="location"
                        type="text"
                        name="location"
                        placeholder="location"
                     
                    />
                </label>
                <div className="submitContainer">
                <input type="submit" />
                </div>
            </form>
            </div>
        <div>
            <div className="schoolListContainer">
           <div>{listSchools}</div>
           </div>
        </div>
        </>
    );
}



export { Education };
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
                <p className="schoolTitle">School Name: {data.schoolName}   Degree: {data.degree}</p>
                
                <button className="delete" value={data.id} onClick={handleDelete}>delete</button>
                <button className="edit" value={data.id} onClick={handleEdit}>edit</button>
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
                      //  value={schoolData.schoolName}
                    //onChange={handleSchoolChange}
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
                      //value='bs'
                    //onChange={handleSchoolChange}
                    />
                </label>

                <label>
                    Field of Study:{' '}
                    <input
                        id="fos"
                        type="text"
                        name="fos"
                        placeholder="Field of Study"
                      //  value={schoolData.fos}
                    //onChange={handleSchoolChange}
                    />
                </label>

                <label>
                    Start Date:{' '}
                    <input
                        id="startDate"
                        type="date"
                        name="startDate"
                      //  value={schoolData.startDate}
                    //onChange={handleSchoolChange}
                    />
                </label>
                <label>
                    End Date:{' '}
                    <input
                        id="endDate"
                        type="date"
                        name="endDate"
                      //  value={schoolData.endDate}
                    //onChange={handleSchoolChange}
                    />
                </label>

                <label>
                    Location:{' '}
                    <input
                        id="location"
                        type="text"
                        name="location"
                        placeholder="location"
                      //  value={schoolData.location}
                    // onChange={handleSchoolChange}
                    />
                </label>
                <input type="submit" />
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
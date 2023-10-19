import React, { useState } from "react";

function Work(props) {
    const {
        workData,
        handleDelete,
        handleWorkSubmit,
        handleEdit,

    } = props;


/*
        const listSchools = schoolData.map(data =>
            <div key={data.id}>
                <p>School Name: {data.schoolName}   Degree: {data.degree}</p>
                
                <button value={data.id} onClick={handleDelete}>delete</button>
                <button value={data.id} onClick={handleEdit}>edit</button>
            </div>
    
            )
       */

    return (
        <>
            <h2>Work Experience</h2>
            <form onSubmit={handleWorkSubmit}>
                <label>
                    Company:{' '}
                    <input
                        id="company"
                        type="text"
                        name="company"
                        placeholder="school"
                      //  value={schoolData.schoolName}
                    //onChange={handleSchoolChange}
                    />
                </label>
                <label>
                    Title/Position:{' '}
                    <input
                        id="title"
                        type="text"
                        name="title"
                      //value='bs'
                    //onChange={handleSchoolChange}
                    />
                </label>

               

                <label>
                    Start Date:{' '}
                    <input
                        id="wStartDate"
                        type="text"
                        name="startDate"
                      //  value={schoolData.startDate}
                    //onChange={handleSchoolChange}
                    />
                </label>
                <label>
                    End Date:{' '}
                    <input
                        id="wEndDate"
                        type="text"
                        name="endDate"
                      //  value={schoolData.endDate}
                    //onChange={handleSchoolChange}
                    />
                </label>

                <label>
                    Location:{' '}
                    <input
                        id="wLocation"
                        type="text"
                        name="location"
                      //  value={schoolData.location}
                    // onChange={handleSchoolChange}
                    />
                </label>

                <label>
                    Description:{' '}
                    <input
                        id="description"
                        type="text"
                        name="descrption"
                      //  value={schoolData.fos}
                    //onChange={handleSchoolChange}
                    />
                </label>
                <input type="submit" />
            </form>
        <div>
           
        </div>
        </>
    );
}



export { Work };
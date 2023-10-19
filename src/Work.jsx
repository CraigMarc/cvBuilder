import React, { useState } from "react";

function Work(props) {
    const {
        workData,
        handleWorkDelete,
        handleWorkSubmit,
        handleWorkEdit,

    } = props;



        const listWork = workData.map(data =>
            <div key={data.id}>
                <p>Company: {data.company}   Title: {data.title}</p>
                
                <button value={data.id} onClick={handleWorkDelete}>delete</button>
                <button value={data.id} onClick={handleWorkEdit}>edit</button>
            </div>
    
            )
       

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
                        name="wStartDate"
                      //  value={schoolData.startDate}
                    //onChange={handleSchoolChange}
                    />
                </label>
                <label>
                    End Date:{' '}
                    <input
                        id="wEndDate"
                        type="text"
                        name="wEndDate"
                      //  value={schoolData.endDate}
                    //onChange={handleSchoolChange}
                    />
                </label>

                <label>
                    Location:{' '}
                    <input
                        id="wLocation"
                        type="text"
                        name="wLocation"
                      //  value={schoolData.location}
                    // onChange={handleSchoolChange}
                    />
                </label>

                <label>
                    Description:{' '}
                    <input
                        id="description"
                        type="text"
                        name="description"
                      //  value={schoolData.fos}
                    //onChange={handleSchoolChange}
                    />
                </label>
                <input type="submit" />
            </form>
        <div>
        <p>{listWork}</p>
        </div>
        </>
    );
}



export { Work };
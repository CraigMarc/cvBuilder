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
                        placeholder="company"
                        required
                     
                    />
                </label>
                <label>
                    Title/Position:{' '}
                    <input
                        id="title"
                        type="text"
                        name="title"
                        placeholder="title"
                        required
                     
                    />
                </label>

               

                <label>
                    Start Date:{' '}
                    <input
                        id="wStartDate"
                        type="date"
                        name="wStartDate"
                     
                    />
                </label>
                <label>
                    End Date:{' '}
                    <input
                        id="wEndDate"
                        type="date"
                        name="wEndDate"
                     
                    />
                </label>

                <label>
                    Location:{' '}
                    <input
                        id="wLocation"
                        type="text"
                        name="wLocation"
                        placeholder="location"
                    
                    />
                </label>

                <label>
                    Description:{' '}
                    <textarea
                        id="description"
                        type="textarea"
                        name="description"
                        placeholder="description"
                     
                    />
                </label>
                <input type="submit" />
            </form>
        <div>
        <div>{listWork}</div>
        </div>
        </>
    );
}



export { Work };
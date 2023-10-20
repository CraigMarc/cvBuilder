import React, { useState } from "react";

function Education(props) {
    const {
        schoolData,
        handleDelete,
        handleSchoolSubmit,
        handleEdit,

    } = props;

 /* const [schoolData, setSchoolData] = useState(
        {

           schoolData: {
                schoolName: '',
                degree: '',
                fos: '',
                startDate: '',
                endDate: '',
                location: '',
                id: '',
            },
        })*/

    /*  const handleSchoolChange = (event) => {
          const name = event.target.name;
          const value = event.target.value;
          //setSchoolData(values => ({ ...values, [name]: value }))
        }*/

        const listSchools = schoolData.map(data =>
            <div key={data.id}>
                <p>School Name: {data.schoolName}   Degree: {data.degree}</p>
                
                <button value={data.id} onClick={handleDelete}>delete</button>
                <button value={data.id} onClick={handleEdit}>edit</button>
            </div>
    
            )
       

    return (
        <>
            <h2>Education Form</h2>
            <form id="edForm" onSubmit={handleSchoolSubmit}>
                <label>
                    School Name:{' '}
                    <input
                        id="schoolName"
                        type="text"
                        name="schoolName"
                        placeholder="school name"
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
        <div>
           <p>{listSchools}</p>
        </div>
        </>
    );
}



export { Education };
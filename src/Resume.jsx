import email from './assets/email.svg';
import phone from './assets/phone.svg';
import location from './assets/location.png';
import React from 'react'



function Resume(props) {

    const {
        handlePrint,
        data,
        schoolData,
        workData,
    } = props;

   

    let schoolName = data.schoolName

    const arrayDataItems = schoolData.map(data =>
        <div key={data.id}>
            <div className="schoolContainer">
            <div>
            <p>{data.startDate} - {data.endDate}</p>
            <p>{data.location}</p>
            </div>
            <div>
           <p><strong>{data.schoolName}</strong></p>
            <p>{data.degree} {data.fos}</p>
            </div>
            </div>
        </div>

    )

    const arrayWorkItems = workData.map(data =>
      <div key={data.id} className="workContainer">
            
            <div>
            <p>{data.wStartDate} - {data.wEndDate}</p>
            <p>{data.wLocation}</p>
            </div>
            <div>
            <p><strong>{data.company}</strong></p>
            <p>{data.title}</p>
            <p>{data.description}</p>
            </div>
            
        </div>

    )

    
    

    return (
       <div>
        <div className="resume">
            <header>

                <h1>{data.name}</h1>
                <div className="container">
                <h2><img className="emailImg" src={email}></img> {data.email}</h2>
                
                <h2><img className="phoneImg" src={phone}></img> {data.phone}</h2>
                
                <h2><img className="locImg" src={location}></img>{data.address}</h2>
                </div>

            </header>
            <div className="ed">
                <h3>Education</h3>
                <div>{arrayDataItems}</div>

            </div>

            <div className="work">
                <h3>Work Experience</h3>
                <div>{arrayWorkItems}</div>

            </div>


            
            
          </div>
        </div>
   

        
    )
}


export { Resume };
import email from './assets/email.svg';
import phone from './assets/phone.svg';
import location from './assets/location.png';

function Resume(props) {

    const {

        data,
        schoolData,
        workData,
    } = props;

    let schoolName = data.schoolName

    const arrayDataItems = schoolData.map(data =>
        <div key={data.id}>
            <p>School Name: {data.schoolName}</p>
            <p>Degree: {data.degree}</p>
            <p>Field of Study: {data.fos}</p>
            <p>Start Date: {data.startDate}</p>
            <p>End Date: {data.endDate}</p>
            <p>Location: {data.location}</p>
        </div>

    )

    const arrayWorkItems = workData.map(data =>
      <div key={data.id}>
            <p>Company: {data.company}</p>
            <p>Title: {data.title}</p>
            <p>Start Date: {data.wStartDate}</p>
            <p>End Date: {data.wEndDate}</p>
            <p>Location: {data.wLocation}</p>
            <p>Description: {data.description}</p>
        </div>

    )

    return (
        <>
            <header>

                <h1>{data.name}</h1>
                <div className="container">
                <h2><img className="emailImg" src={email}></img> {data.email}</h2>
                
                <h2><img className="phoneImg" src={phone}></img> {data.phone}</h2>
                
                <h2><img className="locImg" src={location}></img>{data.address}</h2>
                </div>

            </header>
            <div>
                <h3>Education:</h3>
                <div>{arrayDataItems}</div>

            </div>

            <div>
                <h3>Work Experience:</h3>
                <div>{arrayWorkItems}</div>

            </div>



        </>
    )
}

/*{schoolData.map(function(d, idx){
    return (<li key={idx}>{d.schoolName}</li>)
  })}*/
export { Resume };
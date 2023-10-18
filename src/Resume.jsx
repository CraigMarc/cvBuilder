function Resume(props){

    const {
       
        data,
      } = props;
     
let schoolName = data.schoolName

    return (
      <>
        <header>
    
        <h1>{data.name}</h1>
    <h2>{data.email}</h2>
    <h2>{data.phone}</h2>
    <h2>{data.address}</h2>
    
</header>

<div>
<h3>School Name {data.schoolName}</h3>
<h3>Degree {data.degree}</h3>
<h3>Field of Study {data.fos}</h3>
<h3>Start Date {data.startDate}</h3>
<h3>End Date {data.endDate}</h3>
<h3>Location {data.location}</h3>


</div>



</>
    )
}

export { Resume };
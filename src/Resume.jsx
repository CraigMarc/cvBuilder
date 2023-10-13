function Resume(props){

    const {
        phone,
        address,
        email,
        name,
        schoolData,
      } = props;
     
let schoolName = schoolData.schoolName

    return (
      <>
        <header>
    
        <h1>{name}</h1>
    <h2>{email}</h2>
    <h2>{phone}</h2>
    <h2>{address}</h2>
    
</header>

<div>
<h3>School Name {schoolData.schoolName}</h3>
<h3>Degree {schoolData.degree}</h3>
<h3>Field of Study {schoolData.fos}</h3>
<h3>Start Date {schoolData.startDate}</h3>
<h3>End Date {schoolData.endDate}</h3>
<h3>Location {schoolData.location}</h3>
<h1>{name}</h1>

</div>



</>
    )
}

export { Resume };
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
<h2>{schoolData.schoolName}</h2>
<h1>{name}</h1>

</div>



</>
    )
}

export { Resume };
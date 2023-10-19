function Resume(props) {

    const {

        data,
        schoolData,
        workData,
    } = props;

    let schoolName = data.schoolName

    const arrayDataItems = schoolData.map(data =>
        <li key={data.id}>
            <p>School Name: {data.schoolName}</p>
            <p>Degree: {data.degree}</p>
            <p>Field of Study: {data.fos}</p>
        </li>

    )

    const arrayWorkItems = workData.map(data =>
        <li key={data.id}>
            <p>Company: {data.company}</p>
            <p>Title: {data.title}</p>
            <p>Start Datsa: {data.wStartDate}</p>
        </li>

    )

    return (
        <>
            <header>

                <h1>{data.name}</h1>
                <h2>{data.email}</h2>
                <h2>{data.phone}</h2>
                <h2>{data.address}</h2>

            </header>
            <div>
                <h3>Education:</h3>
                <ul>{arrayDataItems}</ul>

            </div>

            <div>
                <h3>Work Experience:</h3>
                <ul>{arrayWorkItems}</ul>

            </div>



        </>
    )
}

/*{schoolData.map(function(d, idx){
    return (<li key={idx}>{d.schoolName}</li>)
  })}*/
export { Resume };
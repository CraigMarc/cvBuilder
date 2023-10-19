function Resume(props) {

    const {

        data,
        schoolData,
    } = props;

    let schoolName = data.schoolName

    const arrayDataItems = schoolData.map(data =>
        <li key={data.id}>
            <p>{data.schoolName}</p>
            <span>{data.degree}</span>
            <span>{data.fos}</span>
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
            <ul>{arrayDataItems}</ul>

            </div>





        </>
    )
}

/*{schoolData.map(function(d, idx){
    return (<li key={idx}>{d.schoolName}</li>)
  })}*/
export { Resume };
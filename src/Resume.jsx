function Resume(props){

    const {
        phone,
        address,
        email,
        name,
        
      } = props;


    return (
        <header>
    
  <h1>{name}</h1>
    <h2>{email}</h2>
    <h2>{phone}</h2>
    <h2>{address}</h2>

</header>
    )
}

export { Resume };
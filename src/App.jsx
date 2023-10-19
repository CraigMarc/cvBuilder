
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BasicInfo } from './BasicInfo.jsx'
import { Resume } from './Resume.jsx'
import { Education } from './Education'

function App() {

  //states
  /*
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');*/

  const [resData, setResData] = useState({
    
      basicData: {
        name: '',
        email: '',
        phone: '',
        address: '',
      },
    })

    const [schoolData, setSchoolData] = useState([])

  //event handlers
/*
  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePhoneChange(e) {
    setPhone(e.target.value);
  }

  function handleAddressChange(e) {
    setAddress(e.target.value);
  }
*/
  const handleSchoolSubmit = (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target).entries());
    let uuid = self.crypto.randomUUID();
    const idData = {...data, id: uuid}
    const newSchool = [...schoolData, idData]
      setSchoolData(newSchool);
   
  }
  /*
    const handleSchoolChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setEdData(values => ({...values, [name]: value}))
    }*/


  const handleResChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setResData(values => ({ ...values, [name]: value }))
  }

  const handleDelete = (event) => {
    const id = event.target.value;
    
    const newData = schoolData.filter((item) => item.id !== id)
    setSchoolData(newData);
  }



  //return components
  return (
    <div>

      <BasicInfo
        basicData={resData}
        handleSchoolChange={handleResChange}
        
      />

      <Education
        schoolData={schoolData}
        handleSchoolChange={handleResChange}
        handleSchoolSubmit={handleSchoolSubmit}
        handleDelete={handleDelete}
      />

      <Resume
        
        data={resData}
        schoolData={schoolData}
        
      />


    </div>
  )




}

export default App


import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BasicInfo } from './BasicInfo.jsx'
import { Resume } from './Resume.jsx'
import { Education } from './Education'

function App() {

  //states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const [edData, setEdData] = useState(
     {
      schoolData:{
        schoolName: '',
        degree: '',
        fos: '',
        startDate: '',
        endDate: '',
      }
      })

  //event handlers

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

  const handleSchoolSubmit = (event) => {
    event.preventDefault();
   
  }
/*
  const handleSchoolChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setEdData(values => ({...values, [name]: value}))
  }*/

  
  const handleSchoolChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setEdData(values => ({...values, [name]: value}))
  }
  


//return components
  return (
    <div>

      <BasicInfo
        name={name}
        email={email}
        phone={phone}
        address={address}
        handleNameChange={handleNameChange}
        handleEmailChange={handleEmailChange}
        handlePhoneChange={handlePhoneChange}
        handleAddressChange={handleAddressChange}
      />

      <Resume
        name={name}
        email={email}
        phone={phone}
        address={address}
        schoolData={edData}
      />

      <Education
        schoolData={edData}
        handleSchoolChange={handleSchoolChange}
        handleSchoolSubmit={handleSchoolSubmit}
        

      />


    </div>
  )

  


}

export default App

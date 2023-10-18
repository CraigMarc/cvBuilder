
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
      schoolinfo: [],
      workInfo: [],
    }
    )

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



  //return components
  return (
    <div>

      <BasicInfo
        basicData={resData}
        handleSchoolChange={handleResChange}
        
      />

      <Education
        resData={resData}
        handleSchoolChange={handleResChange}
        handleSchoolSubmit={handleSchoolSubmit}
      />

      <Resume
        
        data={resData}
      />


    </div>
  )




}

export default App

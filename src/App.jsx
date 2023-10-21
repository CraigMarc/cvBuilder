
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BasicInfo } from './BasicInfo.jsx'
import { Resume } from './Resume.jsx'
import { Education } from './Education'
import { Work } from './Work'
import { Print } from './Print'



function App() {


  const [resData, setResData] = useState({
    name: 'John Doe',
    email: 'jdoe@gmail.com',
    phone: '(999)999-9999',
    address: 'Anytown, PA',

  })

  const [schoolData, setSchoolData] = useState([{
    "schoolName": "University",
    "degree": "BS",
    "fos": "Computer Science",
    "startDate": "2010-09-01",
    "endDate": "2014-05-20",
    "location": "Anytown, PA",
    "id": "28946e45-f4e9-46c0-aba8-097b1643adbf"
  }])

  const [workData, setWorkData] = useState([{
    "company": "AAA Inc.",
    "title": "Junior Analyst",
    "wStartDate": "2020-10-16",
    "wEndDate": "2023-10-20",
    "wLocation": "Anytown, USA",
    "description": "Designed a REST API call in Java that allows clients to simultaneously update multiple interdependent elements",
    "id": "0a1d4557-6ad2-4ec4-80d9-63b7947f9975"
  }])

  //event handlers

  const handleSchoolSubmit = (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target).entries());
    let uuid = self.crypto.randomUUID();
    const idData = { ...data, id: uuid }
    const newSchool = [...schoolData, idData]
    setSchoolData(newSchool);

    clearAllInputs()
  }

  function clearAllInputs() {
    let allInputs = document.querySelectorAll('input');
    allInputs.forEach(singleInput => singleInput.value = '');

  }

  function addAllInputs(id) {
    let schoolInput = document.getElementById('schoolName');
    let degreeInput = document.getElementById('degree');
    let fosInput = document.getElementById('fos');
    let startDateInput = document.getElementById('startDate');
    let endDateInput = document.getElementById('endDate');
    let locationInput = document.getElementById('location');

    const newData = schoolData.filter((item) => item.id == id)
    const idRem = newData[0].id

    schoolInput.value = newData[0].schoolName
    degreeInput.value = newData[0].degree
    fosInput.value = newData[0].fos
    startDateInput.value = newData[0].startDate
    endDateInput.value = newData[0].endDate
    locationInput.value = newData[0].location

    const delData = schoolData.filter((item) => item.id !== idRem)
    setSchoolData(delData);

  }


  /*
    const handleResChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setResData(values => ({ ...values, [name]: value }))
    }*/

  const handleResChange = (event) => {
    const { name, value } = event.target;
    setResData({ ...resData, [name]: value });
  };

  const handleDelete = (event) => {
    const id = event.target.value;
    const newData = schoolData.filter((item) => item.id !== id)
    setSchoolData(newData);

  }

  const handleEdit = (event) => {
    const id = event.target.value;

    addAllInputs(id)
    //const newData = schoolData.filter((item) => item.id !== id)
    //setSchoolData(newData);

  }

  const handleWorkSubmit = (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target).entries());
    let uuid = self.crypto.randomUUID();
    const idData = { ...data, id: uuid }
    const newWork = [...workData, idData]
    setWorkData(newWork);

    clearAllInputs()
  }

  const handleWorkDelete = (event) => {
    const id = event.target.value;
    const newData = workData.filter((item) => item.id !== id)
    setWorkData(newData);

  }

  const handleWorkEdit = (event) => {
    const id = event.target.value;

    addWorkInputs(id)
    //const newData = schoolData.filter((item) => item.id !== id)
    //setSchoolData(newData);

  }

  function addWorkInputs(id) {
    let company = document.getElementById('company');
    let title = document.getElementById('title');
    let wStartDate = document.getElementById('wStartDate');
    let wEndDate = document.getElementById('wEndDate');
    let wLocation = document.getElementById('wLocation');
    let description = document.getElementById('description');

    const newWorkData = workData.filter((item) => item.id == id)
    console.log(newWorkData)
    const idRem = newWorkData[0].id

    company.value = newWorkData[0].company
    title.value = newWorkData[0].title
    wStartDate.value = newWorkData[0].wStartDate
    wEndDate.value = newWorkData[0].wEndDate
    wLocation.value = newWorkData[0].wLocation
    description.value = newWorkData[0].description

    const delWorkData = workData.filter((item) => item.id !== idRem)
    setWorkData(delWorkData);

  }




  //return components
  return (
    <div>

      <BasicInfo
        basicData={resData}
        handleBasicChange={handleResChange}

      />

      <Education
        schoolData={schoolData}
        handleSchoolChange={handleResChange}
        handleSchoolSubmit={handleSchoolSubmit}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />

      <Work
        workData={workData}
        handleWorkSubmit={handleWorkSubmit}
        handleWorkDelete={handleWorkDelete}
        handleWorkEdit={handleWorkEdit}
      />

      <Resume
        data={resData}
        schoolData={schoolData}
        workData={workData}

      />
      

    </div>
  )




}


export default App

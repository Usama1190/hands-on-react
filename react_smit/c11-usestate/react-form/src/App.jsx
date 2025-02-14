// import { useState } from "react";
// import Updates from "./Updates"

import Crud from "./Crud"


const App = () => {
  // const [name, setName] = useState('');
  // const [qualification, setQualification] = useState('');

  // const [inputs, setInputs] = useState({
  //   firstName: '',
  //   lastName: '',
  //   age: '',
  //   date: ''
  // })

  // const handleChange = (e) => {
  //   // console.log(e.target.value);
  //   const {name, value} = e.target;
  //   setInputs((pre) => ({...pre, [name]:value}))
    
  // }

  // const handleSubmit = () => {
  //   console.log(inputs);
    
  // }

  return (
    // <div>
    //   <h1>forms handling</h1>
    //   <input name="firstName" onChange={handleChange} value={inputs.firstName} type="text" placeholder="fname" />
    //   <input name="lastName" onChange={handleChange} value={inputs.lastName} type="text" placeholder="lname" />
    //   <input name="age" onChange={handleChange} value={inputs.age} type="text" placeholder="age" />
    //   <input name="date" onChange={handleChange} value={inputs.date} type="date" placeholder="age" />

    //   <button onClick={handleSubmit}>Submit</button>

    //   <Updates />
    // </div>
    <Crud />
  )
}

export default App












/*


import { useState } from "react";
// import Updates from "./Updates"


const App = () => {
  // const [name, setName] = useState('');
  // const [qualification, setQualification] = useState('');

  const [inputs, setInputs] = useState({
    firstName: '',
    lastName: '',
    age: '',
    date: ''
  })

  const handleChange = (e) => {
    // console.log(e.target.value);
    const {name, value} = e.target;
    setInputs((pre) => ({...pre, [name]:value}))
    
  }

  const handleSubmit = () => {
    console.log(inputs);
    
  }

  return (
    <div>
      <h1>forms handling</h1>
      <input name="firstName" onChange={handleChange} value={inputs.firstName} type="text" placeholder="fname" />
      <input name="lastName" onChange={handleChange} value={inputs.lastName} type="text" placeholder="lname" />
      <input name="age" onChange={handleChange} value={inputs.age} type="text" placeholder="age" />
      <input name="date" onChange={handleChange} value={inputs.date} type="date" placeholder="age" />

      <button onClick={handleSubmit}>Submit</button>

      <Updates />
    </div>
  )
}

export default App

*/

















/*

import Updates from "./Updates"


const App = () => {
  // const [name, setName] = useState('');
  // const [qualification, setQualification] = useState('');

  // const handleSubmit = () => {
  //   console.log(name, qualification);
    
  // }

  return (
    <div>
       <h1>forms handling</h1>
      <input type="text" placeholder="NAME" onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="qualification" onChange={(e) => setQualification(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button> 
      <Updates />
    </div>
  )
}

export default App

*/

























/*

import { useState } from "react"

const App = () => {
  const [name, setName] = useState('');
  const [qualification, setQualification] = useState('');

  const handleSubmit = () => {
    console.log(name, qualification);
    
  }

  return (
    <div>
      <h1>forms handling</h1>
      <input type="text" placeholder="NAME" onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="qualification" onChange={(e) => setQualification(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default App

*/
















/*

import Modal from "./Modal"

const App = () => {
  return (
    <div>
      <h1>forms handling</h1>
      <Modal>
        <p>skjsdkfkgf</p>
        <h1>sfdfdkkjdkf</h1>
      </Modal>

      <Modal>
        <p>skfjdffd</p>
        <h1>weriousdhf</h1>
      </Modal>
    </div>
  )
}

export default App
*/

import Dashboard from "./auth/Dashboard"
import UserAuth from "./context/userAuth"

const App = () => {

  return (
    <div>
      <UserAuth>
      <Dashboard />
      </UserAuth>
    </div>
  )
}

export default App





/*

import Dashboard from "./auth/Dashboard"

const App = () => {

  return (
    <div>
      <Dashboard />
    </div>
  )
}

export default App

*/






/*

import { useState } from "react"
import Product from "./Product";

const App = () => {

  const [name, setName] = useState('Usama');

  const handleUpdate = () => {
    setName('Ali')
  }

  return (
    <div>
      <h1>All Hooks Revision</h1>
      <h1>Use State Hook....</h1>
      <p>{name}</p>

      { <button onClick={() => setName('abc')}>Updated</button> }
      <button onClick={handleUpdate}>Updated</button>
      <Product />
    </div>
  )
}

export default App

*/

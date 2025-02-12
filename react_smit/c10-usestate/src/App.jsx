// import Modal from './components/Modal'
// import {useState} from 'react'
// import Product from './components/Product'
// import Blogs from './components/Blogs'
import JuiceProduct from './components/JuiceProduct'
const App = () => {
  // const [modal, setModal] = useState(false)
  return (
    <div>
      {/* <button onClick={() => setModal(true)}>Main Modal</button> */}

      {/* Satet Lifting up */}
      {/* <Modal modal={modal} setModal={setModal} />
      <Product />
      <Blogs /> */}
      <JuiceProduct />
    </div>
  )
}

export default App




/*

import Modal from './components/Modal'
import {useState} from 'react'
import Product from './components/Product'
import Blogs from './components/Blogs'
const App = () => {
  const [modal, setModal] = useState(false)
  return (
    <div>
      <button onClick={() => setModal(true)}>Main Modal</button>

      { Satet Lifting up }
      <Modal modal={modal} setModal={setModal} />
      <Product />
      <Blogs />
    </div>
  )
}

export default App



*/







/*

import { useState } from "react"

const App = () => {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  }
  return (
    <>
    {
      modal && <><p>im modal</p><button onClick={() => setModal(false)}>close</button></>
    }
    
    <button onClick={openModal}>Open Modal</button>
    </>
  )
}

export default App
*/



/*


import { Button } from "react-bootstrap"
import { useState } from "react"

const App = () => {
  const [number, setNumber] = useState(0);
  return (
    <>
      <Button onClick={() => setNumber(number + 1)} variant="primary">+</Button>
      <p>{number}</p>
      <Button onClick={() => setNumber(number - 1)} variant="primary">-</Button>
    </>
  )
}

export default App

*/


/*


import { useState } from "react"
import { Button, Card } from "react-bootstrap"

const App = () => {
  const [number, setNumber] = useState([1, 2, 3, 4, 5, 6, 7, 87, 80])
  return (
    <>
      {number.map((item, index) => {
        return (
          <Card key={index} style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card&apos;s content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        )
      })}
    </>
  )
}

export default App

*/


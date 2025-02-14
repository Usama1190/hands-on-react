import { useState } from "react"
import Content from "./Content"
import Sidebar from "./Sidebar"

const Dashboard = () => {

    const [name, setName] = useState('Usama');
    const [id, setId] = useState('1');

  return (
    <div className="main-wrapper">
      <Sidebar {...{name, id}} />
      <Content {...{name}} />
    </div>
  )
}

export default Dashboard

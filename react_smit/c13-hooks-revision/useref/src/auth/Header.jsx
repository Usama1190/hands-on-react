import { useContext } from "react"
import { AuthContext } from "../context/userAuth"

const Header = () => {
    const name = useContext(AuthContext);
    console.log(name);
    
  return (
    <div className="header">
      <h1>{name.name}</h1>
    </div>
  )
}

export default Header









/*

import { useContext } from "react"
import { AuthContext } from "../context/userAuth"

const Header = () => {
    const myContext = useContext(AuthContext);
    console.log(myContext);
    
  return (
    <div className="header">
      <h1>{myContext}</h1>
    </div>
  )
}

export default Header

*/



/*

const Header = ({name}) => {
  return (
    <div className="header">
      <h1>{name}</h1>
    </div>
  )
}

export default Header

*/
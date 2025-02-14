import { useContext } from "react"
import { AuthContext } from "../context/userAuth"

const Sidebar = () => {
    const name = useContext(AuthContext);
    
  return (
    <div className="sidebar">
      Sidebar
      <h3>{name}</h3>
    </div>
  )
}

export default Sidebar







/*

const Sidebar = ({name, id}) => {
    console.log(name, id);
    
  return (
    <div className="sidebar">
      Sidebar
    </div>
  )
}

export default Sidebar

*/
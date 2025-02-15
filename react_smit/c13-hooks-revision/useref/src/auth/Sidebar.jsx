import { useContext } from "react"
import { AuthContext } from "../context/userAuth"
import { ProductContext } from "../context/ProductContext";

const Sidebar = () => {
    const name = useContext(AuthContext);
    
    const data = useContext(ProductContext);
    console.log(data);
    
  return (
    <div className="sidebar">
      <img src={name.logo} alt="img" />
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
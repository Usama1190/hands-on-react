import { createContext, useState } from "react"


export const AuthContext = createContext('Ali');
const UserAuth = ({children}) => {
    const [data, setData] = useState('Usama');

  return (
    <div>
      <AuthContext.Provider value={data}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default UserAuth

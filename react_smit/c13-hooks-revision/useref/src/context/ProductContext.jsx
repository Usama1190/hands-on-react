import { createContext, useState } from "react"
import { productData } from "../allData";


export const ProductContext = createContext([]);

const AllProducts = ({children}) => {
    const [data, setData] = useState(productData);

  return (
    <div>
      <ProductContext.Provider value={data}>
        {children}
      </ProductContext.Provider>
    </div>
  )
}

export default AllProducts


import { useState } from "react"
import Modal from "./Modal"

const Product = () => {
    const [productModal, setProductModal] = useState(false)
  return (
    <div>
        <button onClick={() => setProductModal(true)}>Product modal</button>
        <Modal modal={productModal} setModal={setProductModal} />
    </div>
  )
}

export default Product

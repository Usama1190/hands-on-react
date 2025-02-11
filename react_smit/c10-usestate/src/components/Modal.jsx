
const Modal = ({ modal, setModal }) => {
  return (
    <>
      {modal && <><p>im modal</p>
        <button onClick={() => setModal(false)}>close</button></>}
    </>
  )
}

export default Modal

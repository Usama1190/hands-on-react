import { useState } from "react"
import { Button, Card } from "react-bootstrap"
import Modal from "./Modal";

const Blogs = () => {
    const [blogModal, setBlogModal] = useState(false);

    const showModal = () => {
        setBlogModal(true);
  
    }
  return (
    <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card&apos; content.
        </Card.Text>
        <Button onClick={showModal} variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Modal modal={blogModal} setModal={setBlogModal} />
    </div>
  )
}

export default Blogs

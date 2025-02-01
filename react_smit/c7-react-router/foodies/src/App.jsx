import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import Contact from "./components/Contact/Contact"
import Services from "./pages/Services"
import About from "./pages/About"
import Error from "./pages/Error"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import OrderNow from "./pages/OrderNow"

const App = () => {
  return (
    // Top Level Element
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/order-now" element={<OrderNow />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
      {/* <Home /> */}
    </div>
  )
}

export default App


/*

Top Level Element

<></>

or 

<React.Fragment></React.Fragment>

*/

// import { Route, Routes } from "react-router"
// import Home from "./pages/Home"
// import Contact from "./components/Contact/Contact"
// import Services from "./pages/Services"
// import About from "./pages/About"
// import Error from "./pages/Error"
// import Header from "./components/Header/Header"
// import Footer from "./components/Footer/Footer"
// import OrderNow from "./pages/OrderNow"

import Home from './pages/Home.jsx';

const App = () => {
  return (
    // Top Level Element
    <div>
      {/* <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/order-now" element={<OrderNow />} />
        <Route path="*" element={<Error />} />
        <Route path="/sign-in" element={'SignIn'} />
        <Route path="/sign-up" element={'SignUp'} />
      </Routes>
      <Footer />
      <Home /> */}
      <Home />
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

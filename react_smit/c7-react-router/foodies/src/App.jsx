import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Services from "./pages/Services";
import OrderNow from "./pages/OrderNow";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    // Top Level Element
    <>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/order-now" element={<OrderNow />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
        {/* <Home /> */}
    </>
  );
};

export default App;


/*

Top Level Element

<></>

or 

<React.Fragment></React.Fragment>

*/

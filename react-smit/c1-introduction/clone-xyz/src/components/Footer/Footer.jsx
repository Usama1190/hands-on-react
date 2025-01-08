import Button from '../common/button/Button';
import Heading from '../common/heading/Heading';
import './footer.css'

const Footer = () => {
  return (
    // top level element
    // <> fragment
    <div className="footer-wrapper">
      <Heading title='Footer' />
      <Button title='Subscribe' link='./assets/images/subscribe.png' />
    </div>
  );
};

export default Footer;

/*

import Button from '../common/button/Button';
import './footer.css'

const Footer = () => {
  return (
    // top level element
    // <> fragment
    <div className="footer-wrapper">
      <h1>Footer</h1>
      <Button title='Subscribe' link='./assets/images/subscribe.png' />
    </div>
  );
};

export default Footer;

*/


/*

import Button from '../common/button/Button';
import './footer.css'

const Footer = () => {
  return (
    // top level element
    // <> fragment
    <div className="footer-wrapper">
      <h1>Footer</h1>
      <Button title='Subscribe' />
    </div>
  );
};

export default Footer;

*/


/*

import Button from '../common/button/Button';
import './footer.css'

const Footer = () => {
  return (
    // top level element
    // <> fragment
    <div className="footer-wrapper">
      <h1>Footer</h1>
      <Button xyz={'T'} title='Subscribe' link='./assets/images/subscribe.png' />
    </div>
  );
};

export default Footer;

*/

/*

import './footer.css'

const Footer = () => {
  return (
    // top level element
    // <> fragment
    <div className="footer">
      <h1>Footer</h1>
      <h1></h1>
      <p></p>
      <span></span>
    </div>
  );
};

export default Footer;

*/
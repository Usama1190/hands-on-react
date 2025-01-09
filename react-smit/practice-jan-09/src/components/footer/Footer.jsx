import './footer.css';
import Heading from "../common/heading/Heading";
import Button from '../common/button/Button';

const Footer = () => {
  return (
    <div className="footer-wrapper">
    <Heading title='Footer' />
    <Button title={'Subscribe'} link={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvhtIUSS2ur9Sz8aQWRfIA0wOxEHtaJuHP_Q&s'} />
    </div>
  );
};

export default Footer;

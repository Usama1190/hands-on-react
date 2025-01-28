import Button from '../common/Button/Button';
import './Header.css';

const Header = () => {
  return (
    <div className='header-wrapper'>
      <div className='logo-wrapper'>
        <h1>Foodies</h1>
      </div>

      <div className='navbar'>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>

      <div className='btn-wrapper'>
        <Button text='Order Now' />
      </div>
    </div>
  )
}

export default Header

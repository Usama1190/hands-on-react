import Button from '../common/Button/Button';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.hdw}>
      <div className={styles.hdlg}>
        <h1>Foodies</h1>
      </div>

      <div className={styles.hdnb}>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>

      <div className={styles.hdbtw}>
        <Button text='Order Now' />
      </div>
    </div>
  )
}

export default Header

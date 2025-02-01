import Button from '../common/Button/Button'
import styles from './Banner.module.css'

const Banner = ({ data }) => {
  // console.log(data);

  const { title, subTitle, imgUrl, buttonText} = data;
  
  return (
    <div className={styles.bnw}>
      <div className={styles.bntw}>
        <h1>{ title }</h1>
        <p>{ subTitle }</p>
        <Button text={ buttonText } />
      </div>
      <div className={styles.bniw}>
        <img src={ imgUrl } alt="banner image" />
      </div>
    </div>
  )
}

export default Banner

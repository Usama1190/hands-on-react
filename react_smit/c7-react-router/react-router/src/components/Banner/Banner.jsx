import Button from '../common/Button/Button'
import './Banner.css'

const Banner = ({ isrotate, data }) => {
  // console.log(data);

  const { title, subTitle, imgUrl, buttonText} = data;
  
  return (
    <div className={`banner-wrapper ${isrotate && 'rotateImg'}`}>
      <div className='text-wrapper'>
        <h1>{ title }</h1>
        <p>{ subTitle }</p>
        { buttonText ? <Button text={ buttonText } /> : null}
      </div>
      <div className='img-wrapper'>
        <img src={ imgUrl } alt="banner image" />
      </div>
    </div>
  )
}

export default Banner

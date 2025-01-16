// import { BannerText } from '../../utils/constant/Banner';
import './StyleBanner.css';

const StyleBanner = ({data}) => {
    console.log(data);
    
  return (
    <div className='banner-wrapper'>
      <div className='main-box'>
        <div>
             <p>{data.subTitle}</p>
            <h1>{data.heading}</h1>
            <p>{data.description}</p>

            {/* <p>{BannerText.subTitle}</p>
            <h1>{BannerText.heading}</h1>
            <p>{BannerText.description}</p> */}
        </div>
      </div>
      <div>
        <img src="./assets/imgs/banner.svg" alt="banner image" />
      </div>
    </div>
  )
}

export default StyleBanner

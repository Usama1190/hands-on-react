import Banner from "../components/Banner/Banner"
import Card from "../components/common/Card/Card"
import Header from "../components/Header/Header"
import { BannerText1, BannerText2, BannerText3 } from "../utils/constant/bannerText"
import './Home.css';
import { servicesData } from "../utils/constant/Services";
import Contact from "../components/Contact/Contact";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner data={BannerText1} />
      <Banner isrotate data={BannerText2} />
      <Banner data={BannerText3} />
      <div className="card-box">
          { servicesData.map((item, index) => {
            return (
              <Card key={index} data={item} />
            )
          })}
      </div>
      <Banner data={BannerText3} />
      <Contact />
    </div>
  )
}

export default Home

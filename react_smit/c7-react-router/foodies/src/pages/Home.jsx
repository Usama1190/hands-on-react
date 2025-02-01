import Banner from "../components/Banner/Banner"
import Header from "../components/Header/Header"
import { BannerText1, BannerText2, BannerText3 } from "../utils/constant/bannerText"

const Home = () => {
  return (
    <div>
      <Header />
      <Banner data={BannerText1} />
      <Banner data={BannerText2} />
      <Banner data={BannerText3} />
    </div>
  )
}

export default Home

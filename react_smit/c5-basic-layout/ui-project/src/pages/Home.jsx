import Services from "../components/common/Services/Services"
import Header from "../components/Header/Header"
import StyleBanner from "../components/StyledBanner/StyleBanner"
import { BannerText1, BannerText2 } from "../utils/constant/Banner"

const Home = () => {
  return (
    <div>
      <Header />
      <StyleBanner data={BannerText1} />
      <StyleBanner data={BannerText2} />
      <Services />
    </div>
  )
}

export default Home

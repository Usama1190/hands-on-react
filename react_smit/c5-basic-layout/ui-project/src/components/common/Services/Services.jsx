import { ServicesCard } from '../../../utils/constant/servicesCardData';
import Card from '../Card/Card'
import './Service.css';

const Services = () => {
  // console.log(ServicesCard);
  
  return (
    <div>
      <h1>Our Services</h1>
      <div className='card-wrapper'>
        {
          ServicesCard.map((item, index) => {
            return (
              <Card data={item} key={index} />
            )
          })
        }

      {/* <Card data={ServicesCard[0]} />
      <Card data={ServicesCard[1]} />
      <Card data={ServicesCard[2]} /> */}

      </div>
    </div>
  )
}

export default Services

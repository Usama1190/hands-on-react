import './Card.css';

const Card = ({ data }) => {
  const { title, subTitle, imgUrl} = data;
  return (
    <div className='card-wrapper'>
      <h1>{ title }</h1>
      <img src={imgUrl} alt="card image" />
      <p>{ subTitle }</p>
      <a href="#">Learn More</a>
    </div>
  )
}

export default Card

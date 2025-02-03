import './Card.css';

const Card = ({ data }) => {
  // console.log(data);

  const { title, year } = data;
  
  return (
    <div className='card-wrapper'>
      <h4>Movie Title: {title}</h4>
      <p>Year {year}</p>
      <button>View Details</button>
    </div>
  )
}

export default Card

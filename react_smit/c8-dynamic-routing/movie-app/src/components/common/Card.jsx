import './Card.css';
import { useNavigate } from 'react-router';

const Card = ({ data }) => {
  // console.log(data);
  const navigate = useNavigate();

  const redirection = (id) => {
    navigate(id);
  }

  const { title, year, id } = data;
  
  return (
    <div className='card-wrapper'>
      <h4>Movie Title: {title}</h4>
      <p>Year {year}</p>
      {/* <button onClick={() => navigate(`/movies/${id}`)}>View Details</button> */}
      <button onClick={() => redirection(`/movies/${id}`)}>View Details</button>
    </div>
  )
}

export default Card

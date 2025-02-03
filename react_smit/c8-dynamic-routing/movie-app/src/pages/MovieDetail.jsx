import { useParams } from 'react-router'
import MoviesData from '../utils/constant/MoviesData';

const MovieDetail = () => {
  // console.log(useParams());

  const { id } = useParams();
  // console.log(id);

  const singleData = MoviesData.find((item) => {
    return item.id == id;
  })

  console.log(singleData);

  const { img } = singleData;

  return (
    <div style={{backgroundImage: `url(${img})`}} className='bgImg'>
    </div>
  )
}

export default MovieDetail

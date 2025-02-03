import Card from "../components/common/Card"
import MoviesData from "../utils/constant/MoviesData"
import './pages.css';

const Movies = () => {
  return (
    <div className="movie-wrapper">
      {
        MoviesData.map((item, index) => {
          return (
            <Card key={index} data={item} />
          )
        })
      }
    </div>
  )
}

export default Movies

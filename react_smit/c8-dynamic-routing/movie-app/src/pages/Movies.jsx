import Button from "../components/common/Button";
import Card from "../components/common/Card"
import MoviesData from "../utils/constant/MoviesData"
import './pages.css';

const Movies = () => {

  // event handler
  const handleClick = () => {
    console.log('click!');
    
  }
  return (
    <div className="movie-wrapper">
      {
        MoviesData.map((item, index) => {
          return (
            <Card key={index} data={item} />
          )
        })
      }
      <button onClick={handleClick}>Click</button>
      <Button text={'apple'} img={'fa-brands fa-apple'} />
      <Button text={'app'} img={'fa-brands fa-google-play'} />
    </div>
  )
}

export default Movies

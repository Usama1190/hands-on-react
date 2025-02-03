import { Route, Routes } from "react-router"
import MovieDetail from "./pages/MovieDetail"
import Movies from "./pages/Movies"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetail />} />
        <Route path="*" element={"Error"} />
      </Routes>
    </div>
  )
}

export default App

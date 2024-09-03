import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

export const moviesData = [
  {
    id: 1,
    title: "Inception",
    genre: "Sci-Fi",
    director: "Christopher Nolan",
    views: 2000,
    rating: 7,
  },
  {
    id: 2,
    title: "The Shawshank Redemption",
    genre: "Drama",
    director: "Frank Darabont",
    views: 2000,
    rating: 8
  },
  {
    id: 3,
    title: "Pulp Fiction",
    genre: "Crime",
    director: "Quentin Tarantino",
    views: 4000,
    rating: 6.8
  },
  {
    id: 4,
    title: "The Godfather",
    genre: "Crime",
    director: "Francis Ford Coppola",
    views: 1000,
    rating: 7.8
  },
  {
    id: 5,
    title: "The Dark Knight",
    genre: "Action",
    director: "Christopher Nolan",
    views: 5000,
    rating: 9
  },
];

const Movies = () => {
  const [genreFilter, setGenreFilter] = useState("All")

  const filteredMovies = genreFilter === "All" ? moviesData : moviesData.filter(movie => movie.genre === genreFilter)
  
  return (
    <>
      <Header />
      <div className="container py-3">
        <h2>List of Movies</h2>
        <div className="form-group my-4">
          <label htmlFor="genreFilter">Filter by Genre: </label>
          <select id="genreFilter" onChange={(e) => setGenreFilter(e.target.value)}
            className="form-control">
            <option value="All">All Genres</option>
            <option value="Action">Action</option>
            <option value="Sci-fi">Sci-fi</option>
            <option value="Drama">Drama</option>
            <option value="Crime">Crime</option>
          </select>
        </div>
        <ul className="list-group mt-3">
          {
            filteredMovies.map((movie) => (
              <li key={movie.id} className="list-group-item">
                <h5>{movie.title}</h5>
                <p>Genre: {movie.genre}</p>
                <p>Director: {movie.director}</p>
                <Link to={`/movies/${movie.id}`} className="btn btn-primary">View Details</Link>
              </li>
            ))
          }
        </ul>
      </div>
      <Footer />
    </>
  )
}

export default Movies;
import { useState, useEffect } from "react";
import Images from "../Images/Images";
import { Link } from "react-router-dom";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  const apiKey = "e7d445a3d3b2d973d65584a1210ec5df";

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);

  return (
    <div>
      {movies.map((data, index) => {
        return (
          <div key={index}>
            <p>{data.title}</p>
            <Link to={`/movieList/${data.id}`}>
              <Images backdropPath={data.backdrop_path} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default MovieList;

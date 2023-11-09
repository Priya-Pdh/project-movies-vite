import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./MovieDetails.css";
import BackButton from "../BackButton/BackButton";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState();

  const apiKey = "e7d445a3d3b2d973d65584a1210ec5df";

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovie(data);
      });
  }, [movieId]);

  return (
    movie && (
      <>
        <BackButton />
        <h1>{movie.title}</h1>
        <img src={`https://image.tmdb.org/t/p/w780/${movie.backdrop_path}`} />
      </>
    )
  );
};

export default MovieDetails;

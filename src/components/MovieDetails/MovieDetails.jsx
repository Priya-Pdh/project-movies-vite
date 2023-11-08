import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
        console.log("Movie Details", data);
        setMovie(data);
      });
  }, [movieId]);


  //NOTE FOR MERGING!! I had to change the "movie &&" under the return to be able to do the
  //destructuring, so I had to add this here instead. It should do the same thing though
  if (!movie) {
    return null;
  }

  //Destructuring of movie data
  const { title, vote_average, genres, runtime, overview, production_companies, backdrop_path } = movie;

  //Function to display runtime in hours and minutes
  const toHoursAndMinutes = (runtime) => {
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;

    return { hours, minutes }
  }
  const convertMinutes = toHoursAndMinutes(runtime);

  return (
    <>
      <h1>{title}</h1>
      <h2 className="rank">{vote_average.toFixed(1)}</h2>
      {genres.map(({ id, name }) => (
        <p key={id} className="genre">{name}</p>
      ))}
      <p>Playtime: {convertMinutes.hours} h {convertMinutes.minutes} min</p>
      <p>{overview}</p>
      {production_companies.map(({ id, name }) => (
        <ul key={id}>
          <li>{name}</li>
        </ul>
      ))}
      <img src={`https://image.tmdb.org/t/p/w780/${backdrop_path}`} />
    </>
  );
};

export default MovieDetails;

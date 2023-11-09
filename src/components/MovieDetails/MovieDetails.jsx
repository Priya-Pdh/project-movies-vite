import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import BackButton from "../BackButton/BackButton";
import "./MovieDetails.css";

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
  const {
    title,
    vote_average,
    genres,
    runtime,
    overview,
    production_companies,
    backdrop_path,
    poster_path,
  } = movie;

  const bgImg = `https://image.tmdb.org/t/p/original/${backdrop_path}`;

  //Function to display runtime in hours and minutes
  const toHoursAndMinutes = (runtime) => {
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;

    return { hours, minutes };
  };
  const convertMinutes = toHoursAndMinutes(runtime);

  return (
    <div>
      <BackButton />
      <div className="bg-img" style={{ backgroundImage: `url(${bgImg})` }}>
        <div className="overlay"></div>
        <div className="movie-content">
          <img
            className="cover-img"
            src={`https://image.tmdb.org/t/p/w342${poster_path}`}
          />
          <div className="rating-container">
            <h2 className="rating">⭐️ {vote_average.toFixed(1)}</h2>
          </div>
          <div className="movie-info">
            <h1>{title}</h1>
            {genres && (
              <p>
                Genre:{" "}
                {genres
                  .map((genre, index, array) => {
                    if (index === array.length - 1) {
                      return genre.name;
                    } else if (index === array.length - 2) {
                      return `${genre.name} & `;
                    } else {
                      return `${genre.name}, `;
                    }
                  })
                  .join("")}
              </p>
            )}

            <p>
              Playtime: {convertMinutes.hours} h {convertMinutes.minutes} min
            </p>
            <p>{overview}</p>
            {production_companies && (
              <div className="company">
                {production_companies.length > 1
                  ? "Production Companies: "
                  : "Production Company: "}
                {production_companies.map((company, index) => (
                  <button key={index} className="genre">
                    <Link to={`/company/${company.id}`}>{company.name}</Link>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;

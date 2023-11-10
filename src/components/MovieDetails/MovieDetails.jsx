import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import BackButton from "../BackButton/BackButton";
import "./MovieDetails.css";
import PageNotFound from "../../components/PageNotFound/PageNotFound";
import Images from "../Images/Images";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState();
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(true);

  const apiKey = import.meta.env.VIT_OPENDB_KEY;

  useEffect(() => {
    if (isNaN(movieId)) {
      setNotFound(true);
      return;
    }

    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("Movie Details", data);
        setMovie(data);
      })
      .catch((error) => {
        console.log("Error fetching movie details:", error);
        setNotFound(true);
        setLoading(false);
      });
  }, [movieId]);

  if (!movie || notFound) {
    return <PageNotFound />;
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

  const bgImg = backdrop_path
    ? `https://image.tmdb.org/t/p/original/${backdrop_path}`
    : null;

  //Function to display runtime in hours and minutes
  const toHoursAndMinutes = (runtime) => {
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;

    return { hours, minutes };
  };
  const convertMinutes = toHoursAndMinutes(runtime);

  return (
    <div>
      <BackButton label="Movies" />
      {/* {loading ? <LoadingSpinner /> : null} */}
      <div className="bg-img" style={{ backgroundImage: `url(${bgImg})` }}>
        <div className="overlay"></div>
        <div className="movie-content">
          <Images
            className="cover-img"
            backdropPath={`https://image.tmdb.org/t/p/w342${poster_path}`}
          />
          {vote_average ? (
            <div className="rating-container">
              <h2 className="rating">⭐️ {vote_average.toFixed(1)}</h2>
            </div>
          ) : null}
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

            {runtime ? (
              <p>
                Playtime: {convertMinutes.hours} h {convertMinutes.minutes} min
              </p>
            ) : null}
            <p>{overview}</p>
            {production_companies && (
              <div className="company">
                {production_companies.length > 1 ? (
                  <h2> Production Companies </h2>
                ) : (
                  <h2>Production Company </h2>
                )}
                <div className="btn-container">
                  {production_companies.map((company, index) => (
                    <Link key={index} to={`/company/${company.id}`}>
                      <button>{company.name}</button>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;

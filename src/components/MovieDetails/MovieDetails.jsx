import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { IoChevronBackCircleSharp } from 'react-icons/io5';
import './MovieDetails.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState();

  const apiKey = 'e7d445a3d3b2d973d65584a1210ec5df';

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovie(data);
      });
  }, [movieId]);

  // Navigate back to the previous page
  const goBack = () => {
    navigate(-1);
  };

  return (
    movie && (
      <>
        <div className="buttonDiv">
          <button onClick={goBack} className="backButton">
            <IoChevronBackCircleSharp className="backIcon" />
          </button>
          <p>Movies</p>
        </div>

        <h1 className="movieTitle">{movie.title}</h1>
        <img src={`https://image.tmdb.org/t/p/w780/${movie.backdrop_path}`} />
        <div className="moreInfo">
        {movie.genres && (
            <div className="genre">
              <p>
                Genre: {movie.genres.map((genre, index, array) => {
                  if (index === array.length - 1) {
                    return genre.name;
                  } else if (index === array.length - 2) {
                    return `${genre.name} & `;
                  } else {
                    return `${genre.name}, `;
                  }
                }).join('')}
              </p>
            </div>
          )}
             {movie.production_companies && (
  <div className="company">
    <p>
      {movie.production_companies.length > 1
        ? 'Production Companies: '
        : 'Production Company: '}
      {movie.production_companies.map((company, index, array) => (
        <span key={index}>
          <Link to={`/company/${company.id}`}>{company.name}</Link>
          {index < array.length - 1 && (index === array.length - 2 ? ' & ' : ', ')}
        </span>
      ))}
    </p>
  </div>
)}

        </div>
      </>
    )
  );
};

export default MovieDetails;

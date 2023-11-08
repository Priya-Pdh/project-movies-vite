import { useState, useEffect } from "react";
import { FadeLoader } from "react-spinners";
import "./MovieList.css";
import LazyImage from "../LazyImage/LazyImage";
import Images from "../Images/Images";
import { Link } from "react-router-dom";


const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const apiKey = "e7d445a3d3b2d973d65584a1210ec5df";

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("Movies list", data);
        setMovies(data.results);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <div className="loading-spinner">
          <FadeLoader loading={loading} size={150} />{" "}
        </div>
      ) : null}
      <div>
        {/*Destructuring of the movies data*/}
        {movies.map(({ id, title, release_date, backdrop_path }) => {
          return (
            <div key={id}>
              <h1>{title}</h1>
              <p>Released {release_date}</p>
              <Link to={`/movieList/${id}`}>
                <LazyImage
                  backdropPath={backdrop_path}
                />
              </Link>
            </div>
          );
        })
        }
      </div>
    </>
  );
};

export default MovieList;

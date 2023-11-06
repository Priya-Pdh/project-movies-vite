import { useState, useEffect } from "react";
import { FadeLoader } from "react-spinners";
import "./MovieList.css";
import LazyImage from "../LazyImage/LazyImage";

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
        console.log(data);
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
        {movies.map((data, index) => {
          return (
            <div key={index}>
              <p>{data.title}</p>
              <LazyImage
                backdropPath={data.backdrop_path}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MovieList;

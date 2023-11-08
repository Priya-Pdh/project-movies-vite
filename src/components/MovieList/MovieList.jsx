import { useState, useEffect } from "react";
import { FadeLoader } from "react-spinners";
import "./MovieList.css";
import LazyImage from "../LazyImage/LazyImage";
import Images from "../Images/Images";
import { Link } from "react-router-dom";

//Components
import Dropdown from "../Dropdown/Dropdown";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState("");

  const apiKey = "e7d445a3d3b2d973d65584a1210ec5df";

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setMovies(data.results);
        setLoading(false);
      });
  }, []);

  const fetchMovies = (url, setData) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data.results);
      })
      .catch((err) => console.log("Error fetching data", err));
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setSelected(value);

    switch (value) {
      case "popular":
        fetchMovies(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`,
          setMovies
        );
        break;
      case "topRated":
        fetchMovies(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`,
          setMovies
        );
        break;
      case "upcoming":
        fetchMovies(
          `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&primary_release_year=2024&page=1`,
          setMovies
        );

        break;
      case "newReleases":
        fetchMovies(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`,
          setMovies
        );
        break;
      default:
    }
  };

  return (
    <>
      <Dropdown value={selected} onChange={handleChange} />

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
              <Link to={`/movieList/${data.id}`}>
                <LazyImage backdropPath={data.backdrop_path} />
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MovieList;

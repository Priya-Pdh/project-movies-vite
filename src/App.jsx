import MovieDetails from "./components/MovieDetails/MovieDetails";
import MovieList from "./components/MovieList/MovieList";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movieList/:movieId" element={<MovieDetails />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

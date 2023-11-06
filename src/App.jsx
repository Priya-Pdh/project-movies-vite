import MovieDetails from "./components/MovieDetails/MovieDetails";
import MovieList from "./components/MovieList/MovieList";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movieList/:id" element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

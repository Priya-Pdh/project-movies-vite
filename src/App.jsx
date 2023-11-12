import MovieDetails from "./components/MovieDetails/MovieDetails";
import MovieList from "./components/MovieList/MovieList";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductionCompanies from "./components/ProductionCompanies/ProductionCompanies";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movieList" element={<MovieList />} />
        <Route path="/movieList/:movieId" element={<MovieDetails />} />
        <Route path="/company/:company_id" element={<ProductionCompanies />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

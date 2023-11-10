import { Link } from "react-router-dom";
import "../PageNotFound/PageNotFound.css";

const PageNotFound = () => {
  return (
    <div className="page-not-found">
      <h1>Page Not Found. Error 404</h1>
      <img src="./src/components/PageNotFound/minions.png" alt="minion" />
      <Link to="/">Please Go to Home Page</Link>
    </div>
  );
};

export default PageNotFound;

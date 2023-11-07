import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div>
      <h1>Page does not exists. Error 404</h1>
      <Link to="/">Please Go to Home Page</Link>
    </div>
  )
}

export default PageNotFound

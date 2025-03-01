import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ProductionCompanies.css";

import PageNotFound from "../PageNotFound/PageNotFound";
import BackButton from "../BackButton/BackButton";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const ProductionCompanies = () => {
  const { company_id } = useParams();
  const [companyData, setCompanyData] = useState();
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(true);

  const apiKey = import.meta.env.VITE_OPENDB_KEY;
  const companyUrl = `https://api.themoviedb.org/3/company/${company_id}?api_key=${apiKey}&language=en-US`;

  useEffect(() => {
    if (isNaN(company_id)) {
      setNotFound(true);
      setLoading(false);
      return;
    }

    fetch(companyUrl)
      .then((res) => res.json())
      .then((data) => {
        setCompanyData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error fetching company details", error);
        setNotFound(true);
        setLoading(false);
      });
  }, [company_id]);

  if (notFound) {
    return <PageNotFound />;
  }

  if (loading || !companyData) {
    return <LoadingSpinner />;
  }

  const { name, headquarters, origin_country, homepage, logo_path } =
    companyData;

  const bgLogo = `https://image.tmdb.org/t/p/original/${logo_path}`;

  return (
    companyData && (
      <>
        <BackButton label="Movie Details" />
        <div
          key={companyData.id}
          className="companyWrapper logo-img"
          style={{ backgroundImage: `url(${bgLogo})` }}
        >
          <div className="companyDetails">
            {logo_path && (
              <div className="imageDiv">
                <a
                  href={homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  <img
                    className="companyLogo companyItem"
                    src={`https://image.tmdb.org/t/p/w780/${logo_path}`}
                    alt="company_logo"
                  />
                </a>
              </div>
            )}
            <h1 className=" companyItem">Company: {name}</h1>

            {headquarters && (
              <p className="companyItem">Headquarters: {headquarters}</p>
            )}
            {origin_country && (
              <p className="companyItem">Origin Country: {origin_country}</p>
            )}
          </div>
        </div>
      </>
    )
  );
};

export default ProductionCompanies;

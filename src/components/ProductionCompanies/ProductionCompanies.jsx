import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ProductionCompanies.css";
import BackButton from "../BackButton/BackButton";
// import LazyImage from "../../LazyImage/LazyImage";

const ProductionCompanies = () => {
  const { company_id } = useParams();
  const [companyData, setCompanyData] = useState();
  const apiKey = "e7d445a3d3b2d973d65584a1210ec5df";
  const companyUrl = `https://api.themoviedb.org/3/company/${company_id}?api_key=${apiKey}&language=en-US`;

  useEffect(() => {
    fetch(companyUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCompanyData(data);
      });
  }, [company_id]);
  if (!companyData) {
    return null;
  }
  
  const { name, headquarters, origin_country, homepage, logo_path } = companyData;

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

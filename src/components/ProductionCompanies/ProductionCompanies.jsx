import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
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
  return (
    companyData && (
      <div key={companyData.id}>
        <BackButton />
        <h1 className="companyName companyItem">Company: {companyData.name}</h1>

        {companyData.headquarters && (
          <p className="companyItem">Headquarters: {companyData.headquarters}</p>
        )}

        {companyData.homepage && (
          <p className="companyItem">Website: <a href={companyData.homepage} target="_blank" rel="noopener noreferrer">{companyData.homepage}</a></p>
        )}

        {companyData.origin_country && (
          <p className="companyItem">Origin Country: {companyData.origin_country}</p>
        )}

        {companyData.logo_path && (
          <div className="imageDiv">
            <img className="companyLogo companyItem" src={`https://image.tmdb.org/t/p/w780/${companyData.logo_path}`} alt="company_logo" />
          </div>
        )}
      </div>
    )
    
  )
};

export default ProductionCompanies;

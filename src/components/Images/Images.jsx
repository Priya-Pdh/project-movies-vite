import { useState } from 'react';
import "./Images.css";

const Images = ({ backdropPath, context }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <>
      <div className={`image-container ${context}`}>
        {imageLoaded ? null : <div className="loadingImage">Loading image... </div>}
        <img
          style={{ display: imageLoaded ? 'block' : 'none' }}
          src={`https://image.tmdb.org/t/p/w780${backdropPath}`}
          alt="Backdrop"
          onLoad={handleImageLoad}
        />
      </div>
    </>
  );
};

export default Images;

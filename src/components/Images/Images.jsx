const Images = ({ backdropPath }) => {
  return <img src={`https://image.tmdb.org/t/p/w780${backdropPath}`} />;
};

export default Images;

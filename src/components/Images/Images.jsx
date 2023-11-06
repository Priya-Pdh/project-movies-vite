// import {useState, useEffect} from 'react'

// const Images = () => {
//     const [images, setImages] = useState([]);

//   const apiKey = "e7d445a3d3b2d973d65584a1210ec5df";

//   useEffect(() => {
//     fetch(
//       `https://api.themoviedb.org/3/configuration?api_key=${apiKey} `
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         console.log(data.images)
//         setImages(data)
       
//       });
//   }, []);

//   return (
//         images && (
//             <img src={images.images.base_url}>{images.images}</img>
//         )
           

// }

// export default Images;

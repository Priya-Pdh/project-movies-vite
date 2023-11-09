import { useNavigate } from 'react-router-dom';
import { IoChevronBackCircleSharp } from 'react-icons/io5';
import "./BackButton.css"

const BackButton = () => {

    const navigate = useNavigate();
     // Navigate back to the previous page
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="buttonDiv">
          <button onClick={goBack} className="backButton">
            <IoChevronBackCircleSharp className="backIcon" />
          </button>
          <p>Movies</p>
         
        </div>
  )
}

export default BackButton

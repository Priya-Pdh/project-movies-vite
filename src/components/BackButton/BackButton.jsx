import { useNavigate } from "react-router-dom";
import { IoChevronBackCircleSharp } from "react-icons/io5";
import "./BackButton.css";

const BackButton = ({label}) => {
  const navigate = useNavigate();
  // Navigate back to the previous page
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="buttonDiv">
        <IoChevronBackCircleSharp  onClick={goBack} className="backIcon backButton item"  />
      <p className="item">{label}</p>
    </div>
  );
};

export default BackButton;
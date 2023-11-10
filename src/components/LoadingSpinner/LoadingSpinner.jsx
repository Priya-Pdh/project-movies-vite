import { FadeLoader } from "react-spinners";
import "./LoadingSpinner.css"

const LoadingSpinner = () => {
  return (
    <div className="loadingSpinner">
      <FadeLoader  loading={true} size={150} color="red" position="absolute"/>
    </div>
  );
};

export default LoadingSpinner;
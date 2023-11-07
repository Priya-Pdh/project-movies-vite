import { lazy, Suspense } from "react";
import "./LazyImage.css";

const RealLazyImage = lazy(() => import("../Images/Images"));

const LazyImage = (props) => {
  return (
    <Suspense fallback={<div className="loadingImage">Loading image...</div>}>
      <RealLazyImage {...props} />
    </Suspense>
  );
};

export default LazyImage;

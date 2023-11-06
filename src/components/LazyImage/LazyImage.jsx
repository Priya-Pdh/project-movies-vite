import { lazy, Suspense } from "react";

const RealLazyImage = lazy(() => import("../Images/Images"));

const LazyImage = (props) => {
  return (
    <Suspense fallback={<div>Loading image...</div>}>
      <RealLazyImage {...props} />
    </Suspense>
  );
};

export default LazyImage;

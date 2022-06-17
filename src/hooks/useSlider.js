import { useState, useEffect } from "react";

const useSlider = (distance) => {
  const [isScrolling, setIsScrolling] = useState(false);

  const leftArrowClickHandler = (element) => {
    element.scrollBy(-distance, 0);
    disableBtnHandler();
  };

  const rightArrowClickHandler = (element) => {
    element.scrollBy(distance, 0);
    disableBtnHandler();
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setIsScrolling(false);
    }, 1000);

    () => {
      timer.clearTimeOut();
    };
  }, [isScrolling]);

  const disableBtnHandler = () => {
    setIsScrolling(true);
  };

  return [leftArrowClickHandler, rightArrowClickHandler, isScrolling];
};

export default useSlider;

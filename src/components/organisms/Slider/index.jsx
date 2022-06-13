import React, { useRef, useState } from "react";

import "./Slider.scss";

import { Card } from "../../molecules";
import cardData from "../../../data/cardData.json";
import Prev from "/assets/Prev.svg";
import Next from "/assets/Next.svg";

const Slider = (props) => {
  const [isScrolling, setIsScrolling] = useState(false);
  const slider = useRef(null);

  const leftArrowClickHandler = () => {
    slider.current.scrollBy(-340, 0);
    disableBtnHandler();
  };

  const rightArrowClickHandler = () => {
    slider.current.scrollBy(340, 0);
    disableBtnHandler();
  };

  const disableBtnHandler = () => {
    setIsScrolling(true);
    setInterval(() => {
      setIsScrolling(false);
    }, 1000);
  };

  const slicedCardData = cardData.slice(0, props.length);

  return (
    <section className="slider">
      <div className="slider__container">
        <h2 className="slider__title">Check out the delicious recipe</h2>
      </div>
      <div className="slider__container">
        <div className="slider__prev">
          <button
            className="slider__button"
            onClick={leftArrowClickHandler}
            disabled={isScrolling}
          >
            <img src={Prev} />
          </button>
        </div>
        <div className="slider__content" ref={slider}>
          {slicedCardData.map((data) => (
            <Card
              key={data.id}
              image={data.image}
              title={data.title}
              firstInfo={data.firstInfo}
              secondInfo={data.secondInfo}
            ></Card>
          ))}
        </div>
        <div className="slider__next">
          <button
            className="slider__button"
            onClick={rightArrowClickHandler}
            disabled={isScrolling}
          >
            <img src={Next} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Slider;

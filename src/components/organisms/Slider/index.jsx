import React, { useRef, useState } from "react";

import "./Slider.scss";

import { Card } from "../../molecules";
import cardData from "../../../data/cardData.json";
import Prev from "/assets/Prev.svg";
import Next from "/assets/Next.svg";
import useSlider from "../../../hooks/useSlider";

const Slider = (props) => {
  const [leftScroll, rightScroll, isScrolling] = useSlider(340);
  const slider = useRef(null);
  const classes = "slider " + props.className;

  const leftArrowClickHandler = () => {
    leftScroll(slider.current);
  };

  const rightArrowClickHandler = () => {
    rightScroll(slider.current);
  };

  const slicedCardData = cardData.slice(0, props.length);

  return (
    <section className={classes}>
      <div className="slider__container">
        <h2 className="slider__title">{props.title}</h2>
        {props.subtitle && (
          <h4 className="slider__subTitle">{props.subtitle}</h4>
        )}
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

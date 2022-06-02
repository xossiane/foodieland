import React, { useRef, useState } from "react";

import "./Slider.scss";

import { Card } from "../../molecules";

import Food01 from "/assets/Food01.png";
import Food02 from "/assets/Food02.png";
import Food03 from "/assets/Food03.png";
import Food04 from "/assets/Food04.png";

import Prev from "/assets/Prev.svg";
import Next from "/assets/Next.svg";

const Slider = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  const cardData = [
    {
      id: 0,
      image: Food01,
      title: "Mixed Tropical Fruit Salad with Superfood Boosts",
      firstInfo: "30 Minutes",
      secondInfo: "Healthy",
    },
    {
      id: 1,
      image: Food02,
      title: "Big and Juicy Wagyu Beef Cheeseburger",
      firstInfo: "30 Minutes",
      secondInfo: "Western",
    },
    {
      id: 2,
      image: Food03,
      title: "Healthy Japanese Fried Rice with Asparagus",
      firstInfo: "30 Minutes",
      secondInfo: "Healthy",
    },
    {
      id: 3,
      image: Food04,
      title: "Cauliflower Walnut Vegetarian Taco Meat",
      firstInfo: "30 Minutes",
      secondInfo: "Eastern",
    },
  ];

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
          {cardData.map((data) => (
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

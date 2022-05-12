import React, { useRef } from "react";

import "./Slider.css";

import Card from "../../molecules/Card/Card";

import Food01 from "../../../public/img/Food01.png";
import Food02 from "../../../public/img/Food02.png";
import Food03 from "../../../public/img/Food03.png";
import Food04 from "../../../public/img/Food04.png";

import Prev from "../../../public/img/Prev.svg";
import Next from "../../../public/img/Next.svg";

const Slider = () => {
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

  const leftArrowClickHandler = (event) => {
    event.preventDefault();
    console.log(slider.current.offsetWidth);
    slider.current.scrollLeft -= 340;
  };

  const rightArrowClickHandler = (event) => {
    event.preventDefault();
    console.log(slider.current.offsetWidth);
    slider.current.scrollLeft += 340;
  };

  return (
    <div className="slider">
      <div className="slider__prev">
        <button onClick={leftArrowClickHandler}>
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
        <button onClick={rightArrowClickHandler}>
          <img src={Next} />
        </button>
      </div>
    </div>
  );
};

export default Slider;

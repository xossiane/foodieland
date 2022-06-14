import HomeRecipes from "../../molecules/HomeRecipes"
import React, { useRef, useState } from "react";
import { Advertising } from "../../atoms";
import './HomeRecipes.scss'

import Prev from "/assets/Prev.svg";
import Next from "/assets/Next.svg";

function HomeRecipesSlider() {
    const [isScrolling, setIsScrolling] = useState(0);
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
        <section className="HomeRecipes__slider">
         <button
            className="slider__button--mt"
            onClick={leftArrowClickHandler}
            disabled={isScrolling}>
            <img src={Prev} />
          </button>        
        <HomeRecipes ref={slider}></HomeRecipes>
        <button
            className="slider__button--mt"
            onClick={rightArrowClickHandler}
            disabled={isScrolling}
          >
            <img src={Next} />
          </button>
          <Advertising className="ads__img--mt"></Advertising>
        </section> )
}

export default HomeRecipesSlider;
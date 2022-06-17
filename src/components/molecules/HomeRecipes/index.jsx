import { Card } from "../../molecules";
import homerecipes from "/src/data/homerecipes.json";
import "./HomeRecipes.scss";
import { useRef } from "react";
import { Advertising } from "../../atoms";
import leftarrow from "/assets/leftarrow.png";
import rightarrow from "/assets/rightarrow.png";

import useSlider from "../../../hooks/useSlider";

function HomeRecipes(props) {
  const recipes = homerecipes;
  const [leftScroll, rightScroll, isScrolling] = useSlider(350);

  const slider = useRef(null);

  const leftArrowClickHandler = () => {
    leftScroll(slider.current);
  };

  const rightArrowClickHandler = () => {
    rightScroll(slider.current);
  };

  return (
    <>
      <div className="HomeRecipes__info">
        <h2 className="HomeRecipes__title">Simple and tasty recipes</h2>
        <p className="HomeRecipes__text">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim{" "}
        </p>
      </div>
      <div className="HomeRecipes__post" ref={slider}>
        {recipes.map((recipes) => (
          <div className="HomeRecipes__content" key={recipes.id}>
            {
              <Card
                image={recipes.img}
                title={recipes.title}
                firstInfo={recipes.firstInfo}
                secondInfo={recipes.secondInfo}
                className="card--mt"
              ></Card>
            }
          </div>
        ))}

        <Advertising className="ads__img--mt"></Advertising>
      </div>

      <div className="HomeRecipes__slider__arrows">
        <button
          className="HomeRecipes__paginationButton"
          onClick={leftArrowClickHandler}
        >
          <img src={leftarrow}></img>
        </button>
        <button
          className="HomeRecipes__paginationButton"
          onClick={rightArrowClickHandler}
        >
          <img src={rightarrow}></img>
        </button>
      </div>
    </>
  );
}

export default HomeRecipes;

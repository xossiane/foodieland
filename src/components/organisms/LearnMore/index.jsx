import React from "react";
import { Button } from "../../atoms";
import "./LearnMore.scss";

function LearnMore() {
  return (
    <section className="learnMore">
      <div className="learnMore__text">
        <h2 className="learnMore__title">
          Everyone can be a chef in their own kitchen
        </h2>
        <p className="learnMore__paragraph">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim{" "}
        </p>
        <Button className={"button--m"}>Learn More</Button>
      </div>
      <div className="learnMore__img"></div>
    </section>
  );
}

export default LearnMore;

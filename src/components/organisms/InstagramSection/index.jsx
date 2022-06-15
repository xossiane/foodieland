import React, { useRef } from "react";
import { Button } from "../../atoms";
import { InstaCard } from "../../molecules";
import "./InstagramSection.scss";

import Prev from "/assets/Prev.svg";
import Next from "/assets/Next.svg";
import useSlider from "../../../hooks/useSlider";

function InstagramSection() {
  const postSlider = useRef();
  const [leftScroll, rightScroll, isScrolling] = useSlider(350);

  const leftArrowClickHandler = () => {
    leftScroll(postSlider.current);
  };

  const rightArrowClickHandler = () => {
    rightScroll(postSlider.current);
  };

  return (
    <section>
      <div className="InstagramSection__container">
        <div className="InstagramSection__text">
          <h2 className="InstagramSection__textHeading">
            {" "}
            Check out @foodieland on Instagram
          </h2>
          <p className="InstagramSection__textParagraph">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim{" "}
          </p>
        </div>
        <div className="InstagramSection__posts">
          <div className="InstagramSection__prev">
            <button
              className="InstagramSection__button"
              onClick={leftArrowClickHandler}
              disabled={isScrolling}
            >
              <img src={Prev} />
            </button>
          </div>
          <div className="InstagramSection__content" ref={postSlider}>
            <InstaCard
              src={"assets/instaposts/green-leaf-lettuce.png"}
              alt={"green leaf lettuce"}
            />
            <InstaCard src={"assets/instaposts/pancake.png"} alt={"pancake"} />
            <InstaCard
              src={"assets/instaposts/purple-onion-on-a-table.png"}
              alt={"onion"}
            />
            <InstaCard
              src={"assets/instaposts/pork-chops.png"}
              alt={"pork chop"}
            />
          </div>

          <div className="InstagramSection__next">
            <button
              className="InstagramSection__button"
              onClick={rightArrowClickHandler}
              disabled={isScrolling}
            >
              <img src={Next} />
            </button>
          </div>
        </div>
        <Button className="InstagramSection__viewMore">
          <p>Visit Our Instagram</p>
          <img src="/assets/insta.png" alt="" />
        </Button>
      </div>
    </section>
  );
}

export default InstagramSection;

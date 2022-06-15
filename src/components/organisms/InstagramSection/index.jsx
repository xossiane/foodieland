import React, { useRef } from "react";
import InstaCard from "../../molecules/InstaCard";
import "./InstagramSection.scss";

function InstagramSection() {
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
      </div>
    </section>
  );
}

export default InstagramSection;

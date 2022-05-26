import "./CardHeader.scss";

import { CardImage, LikeButton } from "../../atoms";
const CardHeader = (props) => {
  return (
    <div className="card__header">
      <CardImage image={props.image}></CardImage>
      <LikeButton></LikeButton>
    </div>
  );
};

export default CardHeader;

import "./CardHeader.css";
import CardImage from "../../atoms/CardImage/";
import LikeButton from "../../atoms/LikeButton/";

const CardHeader = (props) => {
  return (
    <div className="card__header">
      <CardImage image={props.image}></CardImage>
      <LikeButton></LikeButton>
    </div>
  );
};

export default CardHeader;

import "./CardImage.scss";

const CardImage = (props) => {
  return <img className="card__image" src={props.image} alt="" />;
};

export default CardImage;

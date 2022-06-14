import "./CategoriesCard.scss";

const CategoriesCard = (props) => {
  const classes = props.className ? props.className : "";

  return (
    <div className={"categories__card " + classes}>
      <img className="categories__image" src={props.image} alt="" />
      <img className="categories__blur" src={props.image} alt="" />
      <p className="categories__text">{props.text}</p>
    </div>
  );
};

export default CategoriesCard;

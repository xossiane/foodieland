import "./CategoriesCard.scss";

const CategoriesCard = (props) => {
  const classes = "categories__card" + props.className;

  return (
    <div className={classes}>
      <img className="categories__image" src={props.image} alt="" />
      <p className="categories__text"></p>
    </div>
  );
};

export default CategoriesCard;

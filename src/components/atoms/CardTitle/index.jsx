import "./CardTitle.scss";

const CardTitle = (props) => {
  const classes = "card__title " + props.className
  return (
    <div>
      <h1 className={classes}>{props.title}</h1>
    </div>
  );
};

export default CardTitle;

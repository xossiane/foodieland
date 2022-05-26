import "./CardTitle.scss";

const CardTitle = (props) => {
  return (
    <div>
      <h1 className="card__title">{props.title}</h1>
    </div>
  );
};

export default CardTitle;

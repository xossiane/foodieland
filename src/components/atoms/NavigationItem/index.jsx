import "./NavigationItem.scss";

const NavigationItem = (props) => {
  const { image, label, className, onClick, page } = props;

  const onClickHandler = () => {
    onClick(page);
  };
  return (
    <button
      onClick={onClick && onClickHandler}
      className={`navigation__item ${className}`}
    >
      {label !== "" && label}
      {image !== null && <img src={image} />}
    </button>
  );
};

export default NavigationItem;

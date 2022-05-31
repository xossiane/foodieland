import "./NavigationItem.scss";

const NavigationItem = (props) => {
  const { label, className, onClick, page } = props;

  const onClickHandler = () => {
    onClick(page);
  };
  return (
    <button
      onClick={onClickHandler}
      className={`navigation__item ${className}`}
    >
      {label}
    </button>
  );
};

export default NavigationItem;

import "./NavigationItem.scss";

const NavigationItem = (props) => {
  const { label, className } = props;
  return <button className={`navigation__item ${className}`}>{label}</button>;
};

export default NavigationItem;

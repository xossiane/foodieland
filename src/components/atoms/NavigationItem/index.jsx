import "./NavigationItem.scss";

const NavigationItem = (props) => {
  return <button className="navigation__button">{props.label}</button>;
};

export default NavigationItem;

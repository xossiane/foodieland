import "./NavigationItem.scss";

const NavigationItem = (props) => {
  return <button className="navigation__item">{props.label}</button>;
};

export default NavigationItem;

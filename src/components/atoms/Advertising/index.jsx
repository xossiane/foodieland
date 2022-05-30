import Ads from "/assets/ads.png";
import "./Advertising.scss";
function Advertising(props) {
  return (
    <div className={props.className}>
      <img className="ads__img" src={Ads} />
    </div>
  );
}

export default Advertising;

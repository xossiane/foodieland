import "./CardContent.scss";
import { CardTitle, CardInfo } from "../../atoms";
const CardContent = (props) => {
  return (
    <div className="card__content">
      <CardTitle title={props.title}></CardTitle>
      <CardInfo
        firstInfo={props.firstInfo}
        secondInfo={props.secondInfo}
      ></CardInfo>
    </div>
  );
};

export default CardContent;

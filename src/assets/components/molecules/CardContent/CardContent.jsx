import "./CardContent.css";

import CardTitle from "../../atoms/CardTitle/CardTitle";
import CardInfo from "../../atoms/CardInfo/CardInfo";

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

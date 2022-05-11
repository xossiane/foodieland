import "./Card.css";
import CardHeader from "../../molecules/CardHeader/CardHeader";
import CardContent from "../../molecules/CardContent/CardContent";

import Food01 from "../../../public/img/Food01.png";

const Card = () => {
  return (
    <article className="card">
      <CardHeader image={Food01}></CardHeader>
      <CardContent
        title={"Mixed Tropical Fruit Salad with Superfood Boosts"}
        firstInfo={"30 minutes"}
        secondInfo={"Healthy"}
      ></CardContent>
    </article>
  );
};

export default Card;

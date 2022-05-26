import "./Card.css";

import { CardHeader, CardContent } from "../index";
const Card = (props) => {
  return (
    <article className="card">
      <CardHeader image={props.image}></CardHeader>
      <CardContent
        title={props.title}
        firstInfo={props.firstInfo}
        secondInfo={props.secondInfo}
      ></CardContent>
    </article>
  );
};

export default Card;

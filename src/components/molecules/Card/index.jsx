import "./Card.scss";

import { CardHeader, CardContent } from "../index";
const Card = (props) => {
  return (
    <article className={`${`card`} ${props.className}`}>
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

import "./Card.css";
import CardHeader from "../CardHeader/";
import CardContent from "../CardContent/";

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

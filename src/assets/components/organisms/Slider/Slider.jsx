import "./Slider.css";

import Card from "../../molecules/Card/Card";

import Food01 from "../../../public/img/Food01.png";
import Food02 from "../../../public/img/Food02.png";
import Food03 from "../../../public/img/Food03.png";
import Food04 from "../../../public/img/Food04.png";

import Prev from "../../../public/img/Prev.svg";
import Next from "../../../public/img/Next.svg";

const Slider = () => {
  const cardData = [
    {
      image: Food01,
      title: "Mixed Tropical Fruit Salad with Superfood Boosts",
      firstInfo: "30 Minutes",
      secondInfo: "Healthy",
    },
    {
      image: Food02,
      title: "Big and Juicy Wagyu Beef Cheeseburger",
      firstInfo: "30 Minutes",
      secondInfo: "Western",
    },
    {
      image: Food03,
      title: "Healthy Japanese Fried Rice with Asparagus",
      firstInfo: "30 Minutes",
      secondInfo: "Healthy",
    },
    {
      image: Food04,
      title: "Cauliflower Walnut Vegetarian Taco Meat",
      firstInfo: "30 Minutes",
      secondInfo: "Eastern",
    },
  ];

  return (
    <div className="slider">
      <div className="slider__prev">
        <button>
          <img src={Prev} />
        </button>
      </div>
      <div className="slider__content">
        <Card
          image={cardData[0].image}
          title={cardData[0].title}
          firstInfo={cardData[0].firstInfo}
          secondInfo={cardData[0].secondInfo}
        ></Card>
        <Card
          image={cardData[1].image}
          title={cardData[1].title}
          firstInfo={cardData[1].firstInfo}
          secondInfo={cardData[1].secondInfo}
        ></Card>
        <Card
          image={cardData[2].image}
          title={cardData[2].title}
          firstInfo={cardData[2].firstInfo}
          secondInfo={cardData[2].secondInfo}
        ></Card>
        <Card
          image={cardData[3].image}
          title={cardData[3].title}
          firstInfo={cardData[3].firstInfo}
          secondInfo={cardData[3].secondInfo}
        ></Card>
      </div>
      <div className="slider__next">
        <button>
          <img src={Next} />
        </button>
      </div>
    </div>
  );
};

export default Slider;

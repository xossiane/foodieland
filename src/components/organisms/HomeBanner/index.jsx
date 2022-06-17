import { useEffect, useState } from "react";
import data from "../../../data/homeHeader.json";
import { CardBanner } from "../../molecules";

import "./HomeHeaders.scss";
export default function HomeHeader() {
  const totalItem = data.length;
  const [currentItem, setCurrentItem] = useState(0);

  useEffect(() => {
    const time = setTimeout(() => {
      if (totalItem - 1 === currentItem) {
        setCurrentItem(0);
      } else {
        setCurrentItem(currentItem + 1);
      }
    }, 5000);
    () => {
      time.clearTimeOut();
    };
  }, [currentItem]);

  return (
    <section className="homeBanner">
      <CardBanner data={data} currentItem={currentItem} />
      <div className="homeBanner__container">
        {data.map((dado) => {
          return (
            <span
              key={dado.id}
              className={
                currentItem === dado.id
                  ? "homeBanner__dots homeBanner__dots--active"
                  : "homeBanner__dots "
              }
            >
              {" "}
            </span>
          );
        })}
      </div>
    </section>
  );
}

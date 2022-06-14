import "./Categories.scss";
import { Button } from "../../atoms";
import { CategoriesCard } from "../../molecules";
import categoriesData from "../../../data/categories.json";

const Categories = () => {
  return (
    <section className="categories">
      <h2 className="categories__title">Categories</h2>
      {categoriesData.map((categ) => (
        <CategoriesCard
          className={categ.class}
          key={categ.id}
          image={categ.img}
          text={categ.text}
        />
      ))}
      <Button className="button--blue categories__button">
        View All Categories
      </Button>
    </section>
  );
};

export default Categories;

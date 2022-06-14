import "./Categories.scss";
import { Button } from "../../atoms";
import { CategoriesCard } from "../../molecules";
import Breakfast from "/assets/breakfast.png";

const Categories = () => {
  return (
    <section className="categories">
      <h2 className="categories__title">Categories</h2>
      <CategoriesCard image={Breakfast} text="Breakfast"></CategoriesCard>
      <CategoriesCard image={Breakfast} text="Breakfast"></CategoriesCard>
      <CategoriesCard image={Breakfast} text="Breakfast"></CategoriesCard>
      <CategoriesCard image={Breakfast} text="Breakfast"></CategoriesCard>
      <CategoriesCard image={Breakfast} text="Breakfast"></CategoriesCard>
      <CategoriesCard image={Breakfast} text="Breakfast"></CategoriesCard>
      <Button>View All Categories</Button>
    </section>
  );
};

export default Categories;

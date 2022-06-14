import "./Categories.scss";
import { CategoriesCard } from "../../molecules";
import Breakfast from "assets/breakfast.png";

const Categories = () => {
  return (
    <section className="categories">
      <CategoriesCard image={Breakfast} text="Breakfast"></CategoriesCard>
    </section>
  );
};

export default Categories;

import { Recipe } from "../../molecules";
import { Advertising } from "../../atoms";
import Date from "../../../data/recipes.json";
import "./Recipes.scss";
function Recipes() {
  return (
    <div className="recipes-container">
      <Advertising className="recipes-container__img" />
      <h2 className="recipes-container__title">Tasty Recipes</h2>
      <div className="recipes-container__receitas">
        <Recipe dados={Date} />
      </div>
    </div>
  );
}
export default Recipes;

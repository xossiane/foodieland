import { Recipe } from "../../molecules";
import { Advertising } from "../../atoms";
import Date from "../../../data/recipes.json";
import "./Recipes.scss";
function Recipes() {
  return (
    <div className="recipes-container">
      <Advertising className="recipes-container__img" />
      <h1 className="recipes-container__title">Tasty Recipes</h1>
      <div className="recipes-container__receitas">
        <Recipe dados={Date} />
      </div>
    </div>
  );
}
export default Recipes;

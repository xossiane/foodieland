import { Recipe } from "../../molecules";
import { Advertising } from "../../atoms";
import Date from "../../../data/recipes.json";
import "./Recipes.scss";
function Recipes() {
  return (
    <div className="recipes__container">
      <Advertising />
      <h1>RECIPES</h1>
      <div>
        <Recipe dados={Date} />
      </div>
    </div>
  );
}
export default Recipes;

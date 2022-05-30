import { Recipe } from "../../molecules";
import { Advertising } from "../../atoms";
import Date from "../../../data/recipes.json";
import "./Recipes.scss";
function Recipes() {
  return (
    <div>
      <div className="recipes-container">
        <Advertising />
        <h1 className="recipes-title">Tasty Recipes</h1>

        <div>
          <Recipe dados={Date} />
        </div>
      </div>
    </div>
  );
}
export default Recipes;

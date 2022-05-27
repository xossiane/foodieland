import { Recipe } from "../../molecules";
import { Advertising } from "../../atoms";
import Date from "../../../data/recipes.json";
function Recipes() {
  return (
    <div>
      <Advertising />
      <h1>RECIPES</h1>
      <div>
        <Recipe dados={Date} />
      </div>
    </div>
  );
}
export default Recipes;

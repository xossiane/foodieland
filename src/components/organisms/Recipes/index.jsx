import { Recipe } from "../../molecules";
import Date from "../../../data/recipes.json";
function Recipes() {
  return (
    <div>
      <h1>RECIPES</h1>
      <Recipe dados={Date} />
    </div>
  );
}
export default Recipes;

import eggplate from "/assets/eggplate.png"
import horizontalbar from "/assets/horizontalbar.png"
import './RecipesBanner.scss'
import { ArticleText } from "../../atoms";





function RecipesBanner(){
    const nutrition = [
        {type: "Calories", value: "219.9kcal"},
         {type: "Total Fat", value:"10.7 g"}, 
         {type: "Protein", value:"7.9g"}, 
         {type: "Carbohydrate", value:"22.3g"}, 
         {type: "Cholesterol",value:"37.4mg"}];

    return (
        <><div className="RecipesBanner__container">
        <img className="RecipesBanner__img" src={eggplate} alt="" />
        <div className="RecipesBanner__nutritional">
            <h2 className="RecipesBanner__nutritional--title">Nutrition Information</h2>
            {nutrition.map(({type, value}) => (
                <>
                <h2 className="RecipesBanner__nutritional--type">{type}</h2>
                <h2 className="RecipesBanner__nutritional--value">{value}</h2>
                <img className="RecipesBanner__nutritionalBar" src={horizontalbar} alt="" />
                </>))}
                <p className="RecipesBanner__nutritional--text"> adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>
        
        </div>
        <h2 className="RecipesBanner--text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </h2></>
        
    )
}
export default RecipesBanner
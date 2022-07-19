import eggplate from "/assets/eggplate.png"
import './RecipesBanner.scss'





function RecipesBanner(){
    const nutrition = [{name: "Calories", value: "219.9kcal"}, {name: "Total Fat", value:"10.7 g"}, {name: "Protein", value:"7.9g"}, {name: "Carbohydrate", value:"22.3g"}, {name: "Cholesterol",value:"37.4mg"}];

    return (
        <div className="RecipesBanner__container">
        <img className="RecipesBanner__img" src={eggplate} alt="" />
        <div className="RecipesBanner__nutritional">
            <h2 className="RecipesBanner__nutritional--title">Nutrition Information</h2>
            <p>this is our content</p>
        </div>
        </div>
    )
}
export default RecipesBanner
import { Card } from "../../molecules";
import homerecipes from "/src/data/homerecipes.json";

function HomeRecipes (props) {
    
    const recipes = homerecipes;
return (
    <div className="Recipes__post">
        <h1 className="HomeRecipes__title">Simple and tasty recipes</h1>
        <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
        {recipes.map((recipes) => (
            <Card
              key={recipes.id}
              image={recipes.img}
              title={recipes.title}
              firstInfo={recipes.firstInfo}
              secondInfo={recipes.secondInfo}
            ></Card>)
                
            )
        }
    </div>
)
}

export default HomeRecipes;
import { Card } from "../../molecules";
import homerecipes from "/src/data/homerecipes.json";
import './HomeRecipes.scss'

function HomeRecipes (props) {
    
    const recipes = homerecipes;
return (
    <div className="HomeRecipes__post">
        <div className="HomeRecipes__info">
        <h2 className="HomeRecipes__title">Simple and tasty recipes</h2>
        <p className="HomeRecipes__text">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
        </div>
        
        {recipes.map((recipes) => (
            <div className="HomeRecipes__content">
            <Card
              key={recipes.id}
              image={recipes.img}
              title={recipes.title}
              firstInfo={recipes.firstInfo}
              secondInfo={recipes.secondInfo}
              className="card--mt"
            ></Card>
            </div>)
            
            )
            
        }
        
    </div>
)
}

export default HomeRecipes;
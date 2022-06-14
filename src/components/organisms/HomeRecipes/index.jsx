import { CardImage, CardTitle, LikeButton } from "../../atoms";
import { useContext } from "react";
import homerecipes from "/src/data/homerecipes.json";

function HomeRecipes (props) {
    
  //const article = getFilteredArray();
    const recipes = homerecipes;
return (
    <div className="Recipes__post">
        <h1 className="HomeRecipes__title">Simple and tasty recipes</h1>
        <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
        {recipes.map((recipes) => {
            return (
                <>
                <article key={recipes.id} className="HomeRecipes__post__item">
                    <CardTitle title={recipes.title} />
                    <CardImage
                        className="HomeRecipes__image--mt"
                        image={recipes.img}></CardImage>
                    <LikeButton></LikeButton>
                </article></>
                
            )
        })}
    </div>
)
}

export default HomeRecipes;
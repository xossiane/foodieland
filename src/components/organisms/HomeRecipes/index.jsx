import { CardImage, CardTitle, LikeButton } from "../../atoms";
import { useContext } from "react";
import { BlogContext } from "/src/context/BlogContext";


function HomeRecipes (props) {
    const { dataArticles } = useContext(BlogContext);
  //const article = getFilteredArray();
    const article = dataArticles;
return (
    <div className="Recipes__post">
        <h1 className="HomeRecipes__title">Simple and tasty recipes</h1>
        <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
        {article.map((article) => {
            return (
                <>
                <article key={article.id} className="HomeRecipes__post__item">
                    <CardTitle title={article.subtitle} />
                    <CardImage
                        className="HomeRecipes__image--mt"
                        image={article.img}></CardImage>
                    <LikeButton></LikeButton>
                </article></>
                
            )
        })}
    </div>
)
}

export default HomeRecipes;
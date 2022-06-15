import HomeRecipes from "../../molecules/HomeRecipes"
import '../../../data/homerecipes.json'
import './HomeRecipes.scss'


function HomeRecipesSlider() {
     return (
         <section className="HomeRecipes__slider">
            <HomeRecipes></HomeRecipes>
            


        </section> )
};

export default HomeRecipesSlider;
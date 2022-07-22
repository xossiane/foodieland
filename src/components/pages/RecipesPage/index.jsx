import RecipesHeader from "../../molecules/RecipesHeader";
import { RecipesBanner, Slider, Recipes, Navbar, Footer } from "../../organisms";
import { ToDoList } from "../../organisms";
import Newsletter from "../../organisms/NewsletterForm";
import ToDoListSteps from "../../organisms/ToDoListSteps";
import './RecipesPage.scss';

export default function RecipesPage(){
    return (
        <><>
            <Navbar />
            <RecipesHeader />
            <RecipesBanner />
            <section className="RecipesPage__mid">
                <section className="RecipesPage__ToDoList">
                <ToDoList />
                <ToDoListSteps />
                </section>
                <Recipes />
            </section>
            
        </><Newsletter /><Slider />
        <Footer /></>
        
    )
}
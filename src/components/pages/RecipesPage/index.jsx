import RecipesHeader from "../../molecules/RecipesHeader";
import { RecipesBanner } from "../../organisms";
import { ToDoList } from "../../organisms";
export default function RecipesPage(){
    return (
        <>
        <RecipesHeader />
        <RecipesBanner />
        <ToDoList />
        </>
    )
}
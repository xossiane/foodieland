import RecipesHeader from "../../molecules/RecipesHeader";
import { RecipesBanner } from "../../organisms";
import { ToDoList } from "../../organisms";
import ToDoListSteps from "../../organisms/ToDoListSteps";

export default function RecipesPage(){
    return (
        <>
        <RecipesHeader />
        <RecipesBanner />
        <ToDoList />
        <ToDoListSteps />
        </>
    )
}
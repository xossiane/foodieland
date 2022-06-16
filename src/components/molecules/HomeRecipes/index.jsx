import { Card } from "../../molecules";
import homerecipes from "/src/data/homerecipes.json";
import './HomeRecipes.scss'
import { useRef , useState} from "react";
import { Advertising } from "../../atoms";
import leftarrow from "/assets/leftarrow.png"
import rightarrow from "/assets/rightarrow.png"



function HomeRecipes (props) {
    const recipes = homerecipes;
    const [isScrolling, setIsScrolling] = useState(false);
   
    
    const slider = useRef(null);
    

     const leftArrowClickHandler = () => {
         window.scrollBy(-290, 0);
         disabled={isScrolling}
       };
    
       const rightArrowClickHandler = () => {
         window.scrollBy(290, 0);
         disabled={isScrolling}
       };

   
    
       const disableBtnHandler = () => {
         setIsScrolling(true);
         setInterval(() => {
           setIsScrolling(false);
         }, 1000);
       };

    
return (
    <><header className="HomeRecipes__info">
        <h2 className="HomeRecipes__title">Simple and tasty recipes</h2>
        <p className="HomeRecipes__text">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
    </header>
    
    <div className="HomeRecipes__post">
            {recipes.map((recipes) => (
                <div className="HomeRecipes__content" ref={slider}>
                    {<Card
                        key={recipes.id}
                        image={recipes.img}
                        title={recipes.title}
                        firstInfo={recipes.firstInfo}
                        secondInfo={recipes.secondInfo}
                        className="card--mt"
                    ></Card> }
                </div>
                
                
            )
                
            )}
            
            <Advertising className="ads__img--mt"></Advertising>


        </div>
        
        <div className="HomeRecipes__slider__arrows">
                      
            <button className="leftArrow" onClick={leftArrowClickHandler}  ><img src={leftarrow}></img></button> 
            <button className="rightArrow" onClick={rightArrowClickHandler}  ><img src={rightarrow}></img></button>
            </div>
            </>
)
}

export default HomeRecipes;
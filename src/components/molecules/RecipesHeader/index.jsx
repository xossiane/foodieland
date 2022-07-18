import { ArticleAuthor, ArticleAvatar, ArticleDate} from '../../atoms';
import bar from "/assets/bar.png"
import Timer from "/assets/Timer.svg"
import wade from "/assets/wade.png"
import './RecipesHeader.scss'
function RecipesHeader(){
    return (
        <><p className="RecipesHeader__title">Health Japanese Fried Rice</p>
        <section className="RecipesHeader__info">
        <ArticleAvatar className="RecipesHeader--author" image={wade}/>
        <div className="RecipesHeader__info--text">
        <ArticleAuthor text={"John Smith"}/>
        <ArticleDate text={"15 March 2022"}/>
        </div>
        <img className="RecipesHeader__info__bar" src={bar} alt="" />
        <img className="RecipesHeader__timer" src={Timer} />
        <div className="RecipesHeader__info--prepTime">
        <h2 className="RecipesHeader__info--prepTime1">Prep Time</h2>
        <h2 className="RecipesHeader__info--prepTime2">15 minutes</h2>
        </div>
        <div className="RecipesHeader__info--cookTime">
        <img className="RecipesHeader__info__bar2" src={bar} alt="" />
        <img className="RecipesHeader__timer--mt" src={Timer} />
        <h2 className="RecipesHeader__info--cookTime1">Cook Time</h2>
        <h2 className="RecipesHeader__info--prepTime2">15 minutes</h2>
        </div>
        </section>
        
        
        
        </>
    )
}
export default RecipesHeader;
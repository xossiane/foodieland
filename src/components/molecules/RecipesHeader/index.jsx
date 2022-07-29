import { ArticleAuthor, ArticleAvatar, ArticleDate} from '../../atoms';
import bar from "/assets/bar.png"
import Timer from "/assets/Timer.svg"
import wade from "/assets/wade.png"
import ForkKnife from "/assets/ForkKnife.png"
import Print from "/assets/Print.png"
import Share from "/assets/Share.png"
import horizontalbar from "/assets/horizontalbar.png"
import './RecipesHeader.scss'
function RecipesHeader(){
    return (
        <>
        <div className="RecipesHeader__container">
        <p className="RecipesHeader__title">Health Japanese Fried Rice</p>
        <section className="RecipesHeader__info">
        <ArticleAvatar className="RecipesHeader--author" image={wade}/>
        <div className="RecipesHeader__info--text">
        <ArticleAuthor className="RecipesHeader--authorInfo" text={"John Smith"}/>
        <ArticleDate className="RecipesHeader--authorDate" text={"15 March 2022"}/>
        <img className="RecipesHeader__horizontalBar" src={horizontalbar} alt="" />
        </div>
        <img className="RecipesHeader__info__bar" src={bar} alt="" />
        <img className="RecipesHeader__timer" src={Timer} />
        {/* PrepTime (segunda tag) */}
        <div className="RecipesHeader__info--prepTime">
        <h2 className="RecipesHeader__info--prepTime1">Prep Time</h2>
        <h2 className="RecipesHeader__info--prepTime2">15 minutes</h2>
        </div>
        
        <img className="RecipesHeader__info__bar2" src={bar} alt="" />
        <img className="RecipesHeader__timer--mt" src={Timer} />
        {/* cookTime (terceira tag) */}
        <div className="RecipesHeader__info--cookTime">
        <h2 className="RecipesHeader__info--cookTime1">Cook Time</h2>
        <h2 className="RecipesHeader__info--prepTime2">15 minutes</h2>
        </div>
        <img className="RecipesHeader__info__bar2" src={bar} alt="" />
        {/* type (quarta tag) */}
        <img className="RecipesHeader__info--typeImg" src={ForkKnife} alt="" />
        <h2 className="RecipesHeader__info--type">Chicken</h2>
        
        </section>
        
        </div>
        <div className="RecipesHeader__btn">
        <img className="RecipesHeader__print" src={Print} alt="" />
        <img className="RecipesHeader__share" src={Share} alt="" />
        </div>
        
        </>
    )
}
export default RecipesHeader;
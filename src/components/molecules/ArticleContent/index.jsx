
import { CardTitle, CardInfo } from "../../atoms";
import article from "../../../data/articles.json"
import CardImage from "../../atoms/CardImage";
import ArticleText from "../../atoms/ArticleText";
import ArticleAvatar from "../../atoms/ArticleAvatar";
import ArticleDate from "../../atoms/ArticleDate";
import ArticleAuthor from "../../atoms/ArticleAuthor";
import bar from "../../../../public/assets/bar.png"
import './ArticleContent.scss';

function ArticleContent(props){
    return(
    <div className="article__post">
    {
        article.map(article => {
            return(
                <div className="article__post__item">
                    <CardImage image={article.img}></CardImage>
                    <CardTitle className="card__title--mt" title={article.title}></CardTitle>
                    <ArticleText text={article.desc}></ArticleText>
                    <div className="article__info">
                    <ArticleAvatar image={article.avatar}></ArticleAvatar>
                    <ArticleAuthor text={article.author}></ArticleAuthor>
                    <img className="article__info__bar" src={bar} alt="" />
                    <ArticleDate text={article.date}></ArticleDate>
                    </div>
                </div>

            )
        })
    }
    </div>
    );
   
}

export default ArticleContent;
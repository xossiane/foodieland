import { useContext } from "react";
import {
  CardImage,
  CardTitle,
  ArticleAuthor,
  ArticleAvatar,
  ArticleText,
  ArticleDate,
} from "../../atoms";
import bar from "/assets/bar.png";
import "./ArticleContent.scss";
import { BlogContext } from "/src/context/BlogContext";

function ArticleContent() {
  const { dataArticles } = useContext(BlogContext);
  //const article = getFilteredArray();
  const article = dataArticles;

  return (
    <div className="article__post">
      {article.map((article) => {
        return (
          <article key={article.id} className="article__post__item">
            <CardImage
              className="card__image--mt"
              image={article.img}
            ></CardImage>
            <div className="article__info__bar__container">
              <CardTitle
                className="card__title--mt"
                title={article.title}
              ></CardTitle>
              <ArticleText text={article.desc}></ArticleText>
              <div className="article__info">
                <ArticleAvatar image={article.avatar}></ArticleAvatar>
                <ArticleAuthor text={article.author}></ArticleAuthor>
                <img className="article__info__bar" src={bar} alt="" />
                <ArticleDate text={article.date}></ArticleDate>
              </div>
            </div>
          </article>
        );
      })}
      {article.length === 0 && (
        <>
          <div className="article__triangle-container">
            <div className="article__triangle">
              <span className="article__triangle--icon">!</span>
            </div>
          </div>
          <p className="article__notfound">Article not found</p>
        </>
      )}
    </div>
  );
}

export default ArticleContent;

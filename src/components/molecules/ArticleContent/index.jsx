import { useContext } from "react";
import {
  CardImage,
  CardTitle,
  ArticleAuthor,
  ArticleAvatar,
  ArticleText,
  ArticleDate,
} from "../../atoms";
import bar from "../../../../public/assets/bar.png";
import "./ArticleContent.scss";
import { SearchBlogContext } from "/src/context/SearchBlogContext";

function ArticleContent() {
  const { getFilteredArray } = useContext(SearchBlogContext);
  const article = getFilteredArray();

  return (
    <div className="article__post">
      {article.map((article) => {
        return (
          <div key={article.id} className="article__post__item">
            <CardImage image={article.img}></CardImage>
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
        );
      })}
      {article.length === 0 && <p>Nenhuma receita econtrada 😭😭😭😭</p>}
    </div>
  );
}

export default ArticleContent;

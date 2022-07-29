import './ArticleAuthor.scss'
const ArticleAuthor = (props) => {
    return (
        <div className={`${`article__author`} ${props.className}`}>{props.text}</div>
    );
  };
  
  export default ArticleAuthor;
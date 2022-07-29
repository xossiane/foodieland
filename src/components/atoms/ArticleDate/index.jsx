import './ArticleDate.scss'
const ArticleDate = (props) => {
    return (
        <div className={`${`article__date`} ${props.className}`}>{props.text}</div>
    );
  };
  
  export default ArticleDate;

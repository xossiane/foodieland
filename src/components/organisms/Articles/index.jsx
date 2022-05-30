import { Navigation, ArticleContent } from "../../molecules";

import "./Articles.scss";

const Articles = (props) => {
  return (
    <div className="articles">
      <ArticleContent />
      <Navigation pages={3} />
    </div>
  );
};

export default Articles;

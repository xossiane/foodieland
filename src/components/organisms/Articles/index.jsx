import { Navigation, ArticleContent } from "../../molecules";

import "./Articles.scss";

const Articles = () => {
  return (
    <div className="articles">
      <ArticleContent />
      <Navigation />
    </div>
  );
};

export default Articles;

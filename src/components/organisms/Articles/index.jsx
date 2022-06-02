import { Navigation, ArticleContent } from "../../molecules";
import { Button } from "../../atoms";

import "./Articles.scss";

const Articles = ({ setShowModal }) => {
  return (
    <div className="articles">
      <Button onClick={(e) => setShowModal(true)}>Teste</Button>
      <ArticleContent />
      <Navigation />
    </div>
  );
};

export default Articles;

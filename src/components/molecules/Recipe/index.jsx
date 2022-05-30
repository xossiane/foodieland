import "./Recipe.scss";

function Recipe(props) {
  const date = (
    <article className="recipe-article">
      {props.dados.map((dado) => (
        <div className="recipe-container" key={dado.id}>
          <img className="recipe-container__img" src={dado.img} />
          <div className="recipe-container__typography">
            <h2 className="recipe-container__subtitle">{dado.title}</h2>
            <h3 className="recipe-container__author">{dado.author}</h3>
          </div>
        </div>
      ))}
    </article>
  );
  return <>{date}</>;
}

export default Recipe;

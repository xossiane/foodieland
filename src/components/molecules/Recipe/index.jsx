import "./Recipe.scss";

function Recipe(props) {
  const date = (
    <article>
      {props.dados.map((dado) => (
        <div className="recipe__container" key={dado.id}>
          <img src={dado.img} />
          <h2>{dado.title}</h2>
          <h3>{dado.author}</h3>
        </div>
      ))}
    </article>
  );
  return <>{date}</>;
}

export default Recipe;

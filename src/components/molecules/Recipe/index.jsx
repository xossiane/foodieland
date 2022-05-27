function Recipe(props) {
  const date = (
    <article>
      {props.dados.map((dado) => (
        <div key={dado.id}>
          <img src={dado.img} />
          <h1>{dado.title}</h1>
          <h1>{dado.author}</h1>
        </div>
      ))}
    </article>
  );
  return <>{date}</>;
}

export default Recipe;

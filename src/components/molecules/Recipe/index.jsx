function Recipe(props) {
  const date = (
    <div>
      {props.dados.map((dado) => (
        <div key={dado.id}>
          <img src={dado.img} />
          <h1>{dado.title}</h1>
          <h1>{dado.author}</h1>
        </div>
      ))}
    </div>
  );
  return <div> {date}</div>;
}

export default Recipe;

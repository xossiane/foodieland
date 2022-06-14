import "./CardHomeHeader.scss";
export default function CardHomeHeader(props) {
  return (
    <div className="container">
      {props.data.map((dado) => (
        <div key={dado.id}>
          <img className="testeImg" src={dado.img} />
          <h2 className="testeTitle">{dado.title}</h2>
          <p className="testeDesc">{dado.desc}</p>

          <div className="containerLabel">
            <div className="card">
              <img className="testeImgDesc" src={dado.iconTimer} />
              <p className="testeItens"> {dado.time}</p>
            </div>
            <div className="card">
              <img className="testeImgDesc" src={dado.iconCategory} />
              <p className="testeItens"> {dado.category}</p>
            </div>
          </div>

          <div className="containerBot">
            <div>
              <img src={dado.avatar} />
              <h3>{dado.author}</h3>
              <h4>{dado.date}</h4>
            </div>
            <button>View Recipes</button>
          </div>
        </div>
      ))}
    </div>
  );
}

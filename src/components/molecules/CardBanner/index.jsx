import "./CardHomeHeader.scss";
export default function CardHomeHeader(props) {
  return (
    <>
      {props.data.map((dado) => (
        <div key={dado.id} className="banner">
          <div className="banner__header">
            <img className="banner__mainCourse" src={dado.img} />
            <img
              className="banner__recipesLike"
              src="/assets/recipesLike.png"
            />

            <div className="banner__topContainer">
              <img
                className="banner__topContainer--icon"
                src="/assets/folhaPequena.png"
              />
              <p className="banner__topContainer--title">Hot Recipes</p>
            </div>
          </div>

          <div className="banner__botContainer">
            <h2 className="banner__botContainer--title">{dado.title}</h2>

            <p className="banner__botContainer--description">{dado.desc}</p>

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
              <div className="testeUser">
                <img src={dado.avatar} />
                <div className="testeDadosUser">
                  <h3>{dado.author}</h3>
                  <h4>{dado.date}</h4>
                </div>
              </div>
              <button className="testeBtn">
                View Recipes
                <span className="play"></span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

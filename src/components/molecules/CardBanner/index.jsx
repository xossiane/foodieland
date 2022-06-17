import "./CardHomeHeader.scss";

export default function CardBanner(props) {
  const newBanner = props.data.slice(props.currentItem, props.currentItem + 1);

  return (
    <div className="sliderBanner">
      {newBanner.map((dado) => (
        <div key={dado.id} className="banner">
          <div className="banner__header">
            <img className="banner__mainCourse" src={dado.img} />
            <img
              className="banner__recipesLike"
              src="/assets/recipesLike.png"
            />

            <div className="banner__topContainer">
              <img
                className="banner__topContainer__icon"
                src="/assets/folhaPequena.png"
              />
              <p className="banner__topContainer__title">Hot Recipes</p>
            </div>
          </div>

          <div className="banner__botContainer">
            <h2 className="banner__botContainer__title">{dado.title}</h2>

            <p className="banner__botContainer__description">{dado.desc}</p>

            <div className="banner__informations">
              <div className="banner__card">
                <img className="banner__card__icons" src={dado.iconTimer} />
                <p className="banner__card__content"> {dado.time}</p>
              </div>
              <div className="banner__card">
                <img className="banner__card__icons" src={dado.iconCategory} />
                <p className="banner__card__content"> {dado.category}</p>
              </div>
            </div>

            <div className="banner__footer">
              <div className="banner__authorInformations">
                <img src={dado.avatar} />
                <div className="banner__authorData">
                  <h3 className="banner__authorData__name">{dado.author}</h3>
                  <h4 className="banner__authorData__date">{dado.date}</h4>
                </div>
              </div>

              <button className="banner__button">
                <p className="banner__textButton">View Recipes</p>

                <span className="banner__button--play"></span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

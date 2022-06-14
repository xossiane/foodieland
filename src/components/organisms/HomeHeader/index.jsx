import data from "../../../data/homeHeader.json";
export default function HomeHeader() {
  return (
    <div>
      <div>
        {data.map((dado) => (
          <div key={dado.id}>
            <img src={dado.img} />
            <div>
              <h2>{dado.title}</h2>
              <h3>{dado.author}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import { CoffeeItem } from "./../api/coffee";

const Card = ({ coffee }: { coffee: CoffeeItem }) => {
  return (
    <article className="card ">
      <header>
        <p>{coffee.popular ? "Popular" : "Not popular"}</p>
        <img src={coffee.image} alt={coffee.name} />
      </header>
      <main>
        <h2>{coffee.name}</h2>
        <p>Price: {coffee.price}</p>
      </main>
      <footer>
        <p>
          Rating: {coffee.rating} (based on {coffee.votes} votes)
        </p>
        <p>{coffee.available ? "Available" : "Out of stock"}</p>
      </footer>
    </article>
  );
};

export default Card;

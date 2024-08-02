import { CoffeeItem } from "./../api/coffee";
import starFilled from "./../assets/Star_fill.svg";
import star from "./../assets/Star.svg";

const Card = ({ coffee }: { coffee: CoffeeItem }) => {
  return (
    <article className="card flex flex-col gap-2">
      <header>
        {coffee.popular && (
          <p className="absolute z-10 text-small text-darker bg-yellow m-2 px-3 py-0.5 font-semibold rounded-full">
            Popular
          </p>
        )}
        <img
          src={coffee.image}
          alt={coffee.name}
          className="relative rounded-xl"
        />
      </header>
      <main className="flex justify-between items-center mt-1">
        <h2 className="font-semibold">{coffee.name}</h2>
        <p className="text-darker bg-greenish px-2 py-1 font-semibold text-price rounded-md">
          {coffee.price}
        </p>
      </main>
      <footer className="flex items-center text-label">
        <p className="flex items-center gap-1">
          {coffee.rating && coffee.rating >= 1 ? (
            <>
              <img src={starFilled} alt="filled star" />
              {coffee.rating} ({coffee.votes} votes)
            </>
          ) : (
            <>
              <img src={star} alt="unfilled star" />
              No ratings
            </>
          )}
        </p>
        {!coffee.available && (
          <p className="text-red ml-auto font-semibold">Sold out</p>
        )}
      </footer>
    </article>
  );
};

export default Card;

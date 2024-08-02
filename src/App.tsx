import { useEffect, useState } from "react";
import "./App.css";
import { fetchCoffeeData } from "./api/coffee";
import { CoffeeItem } from "./api/coffee";

import Card from "./components/Card";

function App() {
  const [coffeeList, setCoffeeList] = useState<CoffeeItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadCoffeeData = async () => {
      try {
        const data = await fetchCoffeeData();
        setCoffeeList(data); // Set the state with the fetched data
        setLoading(false);
        console.log(coffeeList);
      } catch (error: any) {
        console.error("There was a problem with the fetch operation:", error);
        setError(error.message);
        setLoading(false);
      }
    };

    loadCoffeeData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <main className="bg-dark mx-auto">
        <img src="./assets/bg-cafe.jpg" alt="cafe" />
        <header>
          <h1 className="text-heading">Our Collection</h1>
          <p className="text-body">
            Introducing our Coffee Collection, a selection of unique coffees
            from different roast types and origins, expertly roasted in small
            batches and shipped fresh weekly.
          </p>
          <nav>
            <ul>
              <li className="text-body text-white">All Products</li>
              <li className="text-body text-white">Available Now</li>
            </ul>
          </nav>
        </header>
        <ul>
          {/* {coffeeList.map((coffee) => (
            <li key={coffee.id}>
              <h2>{coffee.name}</h2>
              <img src={coffee.image} alt={coffee.name} />
              <p>Price: {coffee.price}</p>
              <p>
                Rating: {coffee.rating} (based on {coffee.votes} votes)
              </p>
              <p>{coffee.popular ? "Popular" : "Not popular"}</p>
              <p>{coffee.available ? "Available" : "Out of stock"}</p>
            </li>
          ))} */}

          {coffeeList.map((coffee) => (
            <Card key={coffee.id} coffee={coffee} />
          ))}
        </ul>
      </main>
    </>
  );
}

export default App;

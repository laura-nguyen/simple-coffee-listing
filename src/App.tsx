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
        setCoffeeList(data);
        setLoading(false);
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

  const filteredCoffeeList = coffeeList.filter((coffee) => coffee.available);

  return (
    <>
      <main className="bg-dark mx-auto flex flex-col items-center justify-center max-w-sm py-24 px-8 rounded-2xl my-32">
        <header className="text-center">
          <h1 className="text-heading font-bold">Our Collection</h1>
          <p className="text-body">
            Introducing our Coffee Collection, a selection of unique coffees
            from different roast types and origins, expertly roasted in small
            batches and shipped fresh weekly.
          </p>
          <nav className="flex justify-center my-4">
            <ul className="flex gap-2 font-semibold text-body text-white">
              <li>
                <button onClick={() => setCoffeeList(coffeeList)}>
                  All Products
                </button>
              </li>
              <li>
                <button onClick={() => setCoffeeList(filteredCoffeeList)}>
                  Available Now
                </button>
              </li>
            </ul>
          </nav>
        </header>
        <ul className="grid justify-center gap-16 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-4">
          {coffeeList.map((coffee) => (
            <li key={coffee.id}>
              <Card coffee={coffee} />
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default App;

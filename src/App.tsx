import { useEffect, useState } from "react";
import "./App.css";
import { fetchCoffeeData } from "./api/coffee";
import { CoffeeItem } from "./api/coffee";

import Card from "./components/Card";

function App() {
  const [allCoffeeList, setAllCoffeeList] = useState<CoffeeItem[]>([]);
  const [displayedCoffeeList, setDisplayedCoffeeList] = useState<CoffeeItem[]>(
    []
  );
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("all");

  useEffect(() => {
    const loadCoffeeData = async () => {
      try {
        const data = await fetchCoffeeData();
        setAllCoffeeList(data);
        setDisplayedCoffeeList(data); // Initially display the full list
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

  const showAllProducts = () => {
    setDisplayedCoffeeList(allCoffeeList);
    setActiveFilter("all");
  };

  const showAvailableProducts = () => {
    const filteredCoffeeList = allCoffeeList.filter(
      (coffee) => coffee.available
    );
    setDisplayedCoffeeList(filteredCoffeeList);
    setActiveFilter("available");
  };

  return (
    <>
      <main className="bg-dark mx-auto flex flex-col items-center justify-center max-w-sm  py-24 px-8 lg:p-16 xl:px-32 lg:max-w-2xl xl:max-w-4xl rounded-2xl my-32">
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
                <button
                  onClick={showAllProducts}
                  className={`btn ${activeFilter === "all" ? "active" : ""}`}
                >
                  All Products
                </button>
              </li>
              <li>
                <button
                  onClick={showAvailableProducts}
                  className={`btn ${
                    activeFilter === "available" ? "active" : ""
                  }`}
                >
                  Available Now
                </button>
              </li>
            </ul>
          </nav>
        </header>
        <ul className="grid justify-center gap-16 grid-cols-1 lg:grid-cols-2 lg:gap-x-8 xl:grid-cols-3 mt-4">
          {displayedCoffeeList.map((coffee) => (
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

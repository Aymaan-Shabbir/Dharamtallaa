import { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";
import Skeleton from "./Skeleton";

export const Products = () => {
  const [newItems, setNewItems] = useState([]);
  const [originalItems, setOriginalItems] = useState([]);
  const [top, setTop] = useState(false);
  const [search, setSearch] = useState("");

  const fetchData = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const resData = await data.json();
    setNewItems(resData); //changes
    setOriginalItems(resData); //always constant
  };

  useEffect(() => {
    fetchData();
  }, []);

  //top rated and show all function
  const setItem = () => {
    if (top) {
      setNewItems(originalItems);
      setTop(false);
    } else {
      const filterProduct = originalItems.filter(
        (product) => product.rating.rate >= 4
      );
      setNewItems(filterProduct);
      setTop(true);
    }
  };

  //search item function
  const searchItem = () => {
    const filteredProducts = originalItems.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
    setNewItems(filteredProducts);
  };

  return newItems.length === 0 ? (
    <Skeleton />
  ) : (
    <div className="bg-gray-100 min-h-screen p-6 ">
      <div className="flex justify-between items-center gap-4 mb-6 flex-wrap">
        <button
          className="bg-black text-white px-5 py-2 rounded-lg font-semibold transition duration-300 hover:bg-gray-800"
          onClick={setItem}
        >
          {top ? "Show All" : "Top"}
        </button>

        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search Products..."
            className="p-3 border rounded-lg w-40 focus:outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className="bg-blue-600 text-white p-1 rounded-lg font-semibold transition duration-300 hover:bg-blue-700"
            onClick={searchItem}
          >
            Search
          </button>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {newItems.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

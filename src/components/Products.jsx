import { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";
import Skeleton from "./Skeleton";
import { Link } from "react-router-dom";

export const Products = () => {
  const [newItems, setNewItems] = useState([]);
  const [originalItems, setOriginalItems] = useState([]);
  const [top, setTop] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const resData = await response.json();
        setNewItems(resData);
        setOriginalItems(resData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  // Toggle between top-rated and all products
  const setItem = () => {
    if (top) {
      setNewItems(originalItems);
    } else {
      const filterProduct = originalItems.filter(
        (product) => product.rating?.rate >= 4
      );
      setNewItems(filterProduct);
    }
    setTop(!top);
  };

  // Search function
  const searchItem = () => {
    const filteredProducts = originalItems.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
    setNewItems(filteredProducts);
  };

  return newItems.length === 0 ? (
    <Skeleton />
  ) : (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="flex justify-between items-center gap-4 mb-6 flex-wrap">
        <button
          className="bg-black text-white px-5 py-2 rounded-lg font-semibold transition duration-300 hover:bg-gray-800"
          onClick={setItem}
        >
          {top ? "Show All" : "Top Rated"}
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
            className="bg-blue-600 text-white px-3 py-2 rounded-lg font-semibold transition duration-300 hover:bg-blue-700"
            onClick={searchItem}
          >
            Search
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {newItems.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`}>
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
};

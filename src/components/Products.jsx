import { useEffect, useState } from "react";
import { HOF, ProductCard } from "./ProductCard";
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

  const HOFComponent = HOF(ProductCard);
  //wrapping HOF

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
    <div>
      <div className="flex justify-around m-2 items-center gap-4 mb-2 flex-wrap">
        <div className="flex justify-around items-center gap-4 mb-2 flex-wrap">
          <input
            type="text"
            placeholder="Search Products..."
            className="p-2 border rounded-lg w-full focus:outline-none"
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
        <img
          src="https://cdn.shopify.com/s/files/1/0817/7988/4088/articles/fashion-ecommerce.jpg?v=1738095976"
          alt=""
          className="w-screen"
        />
      </div>
      <div className="bg-gray-100 min-h-screen p-6 mt-1">
        <button
          className="bg-black text-white px-5 py-2 rounded-lg font-semibold transition duration-300 hover:bg-gray-800"
          onClick={setItem}
        >
          {top ? "Show All" : "Top Rated"}
        </button>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {newItems.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`}>
              {product.rating.rate >= 4 ? (
                <HOFComponent product={product} />
              ) : (
                <ProductCard product={product} />
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

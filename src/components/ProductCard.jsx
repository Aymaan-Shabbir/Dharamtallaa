/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export const ProductCard = ({ product }) => {
  return (
    <div className=" text-center bg-white h-full border rounded-lg shadow-lg p-4 transition-transform transform hover:scale-104 m-2">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-40 object-contain rounded-md"
      />
      <h3 className="text-lg font-semibold mt-2 text-gray-900">
        {product.title}
      </h3>

      <p className="text-orange-600 font-bold">
        Rating: {product.rating?.rate || "N/A"}
      </p>
      <p className="text-blue-700 font-bold">₹{product.price}</p>
      <Link
        key={product.id}
        to={`/product/${product.id}`}
        className="block bg-black text-white text-center px-4 py-2 mt-3 rounded-lg transition duration-300 hover:bg-gray-800"
      >
        View Details
      </Link>
    </div>
  );
};

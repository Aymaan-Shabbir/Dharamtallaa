/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
// import { Link } from "react-router-dom";

export const ProductCard = ({ product }) => {
  return (
    <div className=" text-center bg-white h-110 border rounded-lg shadow-lg p-4 transition-transform transform hover:scale-101 m-2 flex items-center justify-center flex-col">
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
      <h1 className="font-bold italic text-gray-400 p-1 ">View Details</h1>
    </div>
  );
};

export const HOF = (ProductCard) => {
  return (props) => {
    return (
      <div className="relative">
        <span
          className="p-1 rounded-md absolute z-10 mx-3 my-1 text-black 
                 bg-gradient-to-r from-gray-500 via-gray-400 to-gray-500 
                 animate-pulse border-2 border-black shadow-md"
        >
          Best Seller
        </span>

        <ProductCard {...props} />
      </div>
    );
  };
};

import { useParams } from "react-router-dom";
import PostDetailSkeleton from "./PostDetailSkeleton";
import useGetSingleProduct from "../hooks/useSingleProduct";
import { addItems } from "../store/cartSlice";
import { useDispatch } from "react-redux";

const ProductDetails = () => {
  const { productId } = useParams();
  const singleProduct = useGetSingleProduct(productId);
  const dispatch = useDispatch();
  //usegetSingleProduct is custom hook for getting data for a single product
  const addCartItem = () => {
    dispatch(addItems(singleProduct));
  };

  return singleProduct === null ? (
    <PostDetailSkeleton />
  ) : (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="w-full max-w-lg flex flex-col items-center justify-start border p-5 bg-white rounded-lg shadow-lg transition duration-300">
        <img
          src={singleProduct.image}
          alt={singleProduct.title}
          className="w-60 h-60 object-contain border rounded-lg"
        />
        <h2 className="text-xl font-bold mt-3 text-gray-800 text-center">
          {singleProduct.title}
        </h2>
        <p className="text-md font-semibold text-orange-600 mt-1">
          Rating: {singleProduct.rating?.rate || "N/A"}
        </p>
        <p className="text-lg font-bold text-blue-700 mt-1">
          ₹{singleProduct.price}
        </p>
        <button
          onClick={addCartItem}
          className="bg-black border border-gray-500  text-white m-1 rounded-lg p-1 cursor-pointer hover:bg-gray-500 hover:text-white"
        >
          ADD +
        </button>
        <p className="text-lg font-bold text-black mt-1">
          {singleProduct.category}
        </p>
        <p className="text-lg font-semibold text-black mt-1 text-center">
          {singleProduct.description}
        </p>
      </div>
    </div>
  );
};

export default ProductDetails;

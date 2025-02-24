import { useDispatch, useSelector } from "react-redux";
import { removeItems, clearItems } from "../store/cartSlice";
// import { useRef } from "react";

function Cart() {
  const cartItems = useSelector((store) => store.cart.cartItems);
  const dispatch = useDispatch();

  // Function to remove specific item by ID
  const removeCartItem = (id) => {
    dispatch(removeItems(id));
  };

  const clearCart = () => {
    dispatch(clearItems());
  };

  // const input = useRef(null);
  // const focusRef = () => {
  //   input.current.focus();
  // };

  return (
    <div className="flex items-center justify-between flex-col m-5">
      <div className="flex m-3">
        <h1 className="font-bold m-2 text-2xl">CART - {cartItems.length}</h1>
        {/* <input ref={input} type="text" placeholder="enter text" />
        <button onClick={focusRef}>click</button> */}
        <h1 className="font-bold m-2 text-2xl">
          {cartItems.length === 0 ? (
            "Your cart is empty , add items"
          ) : (
            <button
              onClick={clearCart}
              className="bg-black border border-gray-500 text-white m-1 rounded-lg p-1 text-sm cursor-pointer hover:bg-gray-500 hover:text-white"
            >
              CLEAR CART
            </button>
          )}
        </h1>
      </div>
      <div className="flex justify-evenly items-start gap-2 flex-wrap">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="w-70 h-60 flex flex-col items-center justify-start border p-5 bg-white rounded-lg shadow-lg transition duration-300"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-10 h-10 object-contain border rounded-lg"
            />
            <h2 className="text-sm font-bold mt-3 text-gray-800 text-center">
              {item.title}
            </h2>
            <p className="text-sm font-semibold text-orange-600 mt-1">
              Rating: {item.rating?.rate || "N/A"}
            </p>
            <p className="text-sm font-bold text-blue-700 mt-1">
              ₹{item.price}
            </p>
            <button
              onClick={() => removeCartItem(item.id)} // Pass item.id to remove specific item
              className="bg-black border border-gray-500 text-white m-1 rounded-lg p-1 text-sm cursor-pointer hover:bg-gray-500 hover:text-white"
            >
              REMOVE -
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;

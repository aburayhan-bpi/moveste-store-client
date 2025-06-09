import { useEffect, useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { FaRegTrashCan } from "react-icons/fa6";
import { HiMinus } from "react-icons/hi";
import Swal from "sweetalert2";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [quantities, setQuantities] = useState({});

  // Fetch cart data from local JSON
  useEffect(() => {
    fetch("./cartData.json")
      .then((res) => res.json())
      .then((data) => {
        setCartItems(data);

        // Initialize quantities for each item (default = 1)
        const initialQuantities = {};
        data.forEach((item) => {
          initialQuantities[item.id] = 1;
        });
        setQuantities(initialQuantities);
      })
      .catch((err) => console.error("Error fetching JSON:", err));
  }, []);

  // Handle + button
  const handleIncrease = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: prev[id] + 1,
    }));
  };

  // Handle - button
  const handleDecrease = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, prev[id] - 1), // Keep minimum quantity = 1
    }));
  };

  // Handle delete icon
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Item removed!", "Successfully removed from cart.", "success");

        const updatedItems = cartItems.filter((item) => item.id !== id);
        const updatedQuantities = { ...quantities };
        delete updatedQuantities[id];

        setCartItems(updatedItems);
        setQuantities(updatedQuantities);
      }
    });
  };

  // Calculate total cost
  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => {
      const qty = quantities[item.id] || 1;
      const price = item.price?.unit || 0;
      return acc + qty * price;
    }, 0).toFixed(2);
  };
console.log(quantities);
  return (
    <div>
      <div className="w-full max-w-7xl mx-auto px-4 xl:px-0 mt-32 pb-20">
        <div className="lg:grid grid-cols-12 space-y-6 md:space-y-0 md:gap-10">
          {/* Left column: Cart items */}
          <div className="col-span-8 border-gray-200">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-12 gap-6 py-4 border-t border-b border-gray-200 w-full mx-auto"
              >
                {/* Product Info */}
                <div className="col-span-12 md:col-span-5 flex gap-3">
                  <div className="w-fit">
                    <img className="w-32" src={item.image} alt="Cart_Products" />
                  </div>
                  <div className="text-gray-800 text-sm text-wrap">
                    <h2 className="text-lg mb-3 break-words">{item.name}</h2>
                    <p>Color: {item.variant?.color}</p>
                    <p>Size: {item.variant?.size}</p>
                    <p>
                      Availability:{" "}
                      <span
                        className={`${
                          item.availability === "in-stock"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        } badge-xs text-xs rounded-2xl`}
                      >
                        {item.availability === "in-stock"
                          ? "In Stock"
                          : "Stock Out"}
                      </span>
                    </p>
                  </div>
                </div>

                {/* Price per item */}
                <div className="col-span-3 md:col-span-2">
                  <p>Each</p>
                  <p className="font-semibold">${item.price?.unit}</p>
                </div>

                {/* Quantity buttons */}
                <div className="col-span-4 md:col-span-2">
                  <p>Quantity</p>
                  <div className="flex items-center">
                    <button
                      onClick={() => handleDecrease(item.id)}
                      className="w-10 h-8 border border-gray-200 hover:cursor-pointer flex items-center justify-center"
                    >
                      <HiMinus />
                    </button>
                    <span className="w-10 h-8 border border-gray-200 flex justify-center items-center">
                      {quantities[item.id]}
                    </span>
                    <button
                      onClick={() => handleIncrease(item.id)}
                      className="w-10 h-8 border border-gray-200 hover:cursor-pointer flex items-center justify-center"
                    >
                      <BsPlusLg />
                    </button>
                  </div>
                </div>

                {/* Total for item */}
                <div className="col-span-3 md:col-span-2">
                  <p>Total</p>
                  <p className="font-semibold">
                    ${(item.price?.unit * (quantities[item.id] || 1)).toFixed(2)}
                  </p>
                </div>

                {/* Delete */}
                <div className="col-span-1 md:col-span-1 flex items-center justify-start md:block">
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="bg-red-100 hover:bg-red-200 p-1 rounded hover:cursor-pointer"
                  >
                    <FaRegTrashCan className="text-red-500" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right column: Summary */}
          <div className="col-span-4 p-2 mt-10 lg:mt-0">
            <div className="flex items-center">
              <div className="flex flex-col">
                <label
                  className="uppercase text-xs text-black mb-[2px]"
                  htmlFor="promoInput"
                >
                  Enter promo code
                </label>
                <input
                  className="w-full pl-1 h-11 border-t-2 border-b-2 border-l-2 border-gray-200 rounded-l placeholder:text-md placeholder:text-gray-400 uppercase focus: outline-none"
                  name="promoInput"
                  type="text"
                  placeholder="Promo Code"
                />
              </div>
              <button className=" bg-sky-800 hover:bg-sky-900 text-white h-11 mt-[17px] rounded-r px-4 transition-all duration-300 hover:cursor-pointer">
                Submit
              </button>
            </div>

            {/* Cost Summary */}
            <div className="mt-6 text-gray-500 space-y-2 text-sm">
              <div className="flex justify-between">
                <p>Shipping cost</p>
                <p>TBD</p>
              </div>
              <div className="flex justify-between">
                <p>Discount</p>
                <p>-$0</p>
              </div>
              <div className="flex justify-between text-sky-800 text-lg font-semibold mt-2">
                <p>Estimated Total</p>
                <p>${calculateTotal()}</p>
              </div>
            </div>

            <button className="w-full border py-2 mt-8 bg-sky-800 hover:bg-sky-900 text-white text-lg transition-all duration-300 hover:cursor-pointer">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

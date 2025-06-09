import { useEffect, useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { HiMinus } from "react-icons/hi";
const Cart = () => {
  const [basePrice] = useState(51.34);
  const [quantity, setQuantity] = useState(1);
  const [eachTotal, setEachTotal] = useState(basePrice);

  useEffect(() => {
    setEachTotal((quantity * basePrice).toFixed(2));
  }, [quantity, setQuantity, basePrice]);
  console.log(quantity, eachTotal);

  return (
    <div className="">
      <div className="w-full max-w-7xl mx-auto px-4 xl:px-0 mt-32 pb-20">
        {/* Cart Section Start */}
        <div className="md:grid grid-cols-12 space-y-6 md:space-y-0 md:gap-10">
          {/* Main */}
          <div className="col-span-8 border-gray-200">
            {/* Cart Product Item */}
            <div className="grid grid-cols-12 gap-6 border-t pt-4 border-b border-gray-200">
              <div className="col-span-6 flex w-full gap-3">
                {/* Img */}
                <div className="w-fit">
                  <img
                    className="w-32"
                    src="https://i.ibb.co/sJJJ10vQ/t-shirt-removebg-preview.png"
                    alt=""
                  />
                </div>
                {/* Product Info */}
                <div className="w-fit text-gray-800 text-sm text-wrap h-fit">
                  <h2 className="text-xl mb-3 break-all">T-shirt for men</h2>
                  <p>Color: Blue</p>
                  <p>Size: XL</p>
                  <p>
                    Availability:{" "}
                    <span className="bg-green-100 text-green-800 badge-xs text-xs rounded-2xl">
                      In Stock
                    </span>
                  </p>
                </div>
              </div>
              {/* Others */}
              {/* Each Price */}
              <div className="col-span-2">
                <p>Each</p>
                <p className="font-semibold">$51.54</p>
              </div>
              {/* Quantity Controller */}
              <div className="col-span-2">
                <p className="">Quantity</p>
                <div className="flex items-center justify-start">
                  <button
                    onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                    className="inline-flex items-center justify-center w-8 h-8 border border-gray-200 hover:cursor-pointer"
                  >
                    <HiMinus />
                  </button>
                  <span className="inline-flex items-center justify-center w-8 h-8 border border-gray-200">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="inline-flex items-center justify-center w-8 h-8 border border-gray-200 hover:cursor-pointer"
                  >
                    <BsPlusLg />
                  </button>
                </div>
              </div>
              {/* Total for each product based on Quantity */}
              <div className="col-span-2">
                <p>Total</p>
                <p className="font-semibold">${eachTotal}</p>
              </div>
            </div>
          </div>
          {/* Sidebar */}
          <div className="sticky top-20 items-center justify-center col-span-4 border-gray-200 p-2">
            {/* Promo Code Input Field & Buttons Start */}
            <div className="flex items-center">
              <div className="flex flex-col">
                <label
                  className="uppercase text-xs text-black mb-[2px]"
                  htmlFor="promoInput"
                >
                  Enter promo code
                </label>
                <input
                  className="w-fit pl-1 h-11 border-t-2 border-b-2 border-l-2 border-gray-200 rounded-l placeholder:text-md placeholder:text-gray-400 focus: outline-none uppercase"
                  name="promoInput"
                  type="text"
                  placeholder="Promo Code"
                />
              </div>
              <button className="w-full self-end bg-sky-800 hover:bg-sky-900 transition-all duration-300 hover:cursor-pointer text-white h-11 rounded-r">
                Submit
              </button>
            </div>
            {/* Promo Code Input Field & Buttons End */}

            {/* Expense Overview with Total */}
            <div className="mt-6 text-gray-500 space-y-2 text-sm">
              <div className="flex justify-between">
                <p>Shipping cost</p>
                <p>TBD</p>
              </div>
              <div className="flex justify-between">
                <p>Discount</p>
                <p>-0$</p>
              </div>
              <div className="flex justify-between text-sky-800 text-lg font-semibold mt-2">
                <p>Estimated Total</p>
                <p>$51.5449</p>
              </div>
            </div>
            {/* Checkout Button */}
            <button className="w-full flex justify-center items-center border py-2 mt-8 hover:cursor-pointer bg-sky-800 hover:bg-sky-900 transition-all duration-300 text-white text-lg">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

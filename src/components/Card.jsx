import React from "react";
import Rating from "react-rating-stars-component";

const Card = ({ carName, rating, reviewers, subtotal, tax, totalPrice }) => {
  return (
    <div className="bg-[#232A47] text-white rounded-lg p-6 shadow-md">
      <h2 className="text-lg font-semibold mb-1">Rental Summary</h2>
      <p className="text-sm text-gray-300 mb-4">
        Prices may change depending on the length of the rental and the price of
        your rental car.
      </p>

      <div className="h-24 w-full rounded mb-4 flex items-center justify-between">
        <div className="BG2 w-[120px] flex items-center justify-center rounded  h-[90px] bg-[#3C435C]">
          <img src="cardCar.png" className="w-[80px]" alt="" />
        </div>
        <div className="flex justify-between flex-col items-center mb-2">
          <h3 className="text-lg font-bold">{carName}</h3>
          <div className="flex items-center justify-around w-[145px]">
            <Rating
              count={5}
              value={rating}
              size={12}
              isHalf={true}
              activeColor="#FBAD39"
              edit={false}
            />
            <span className="text-[11px] ml-2">({reviewers} Reviewers)</span>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex justify-between text-sm mb-1">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm mb-1">
          <span>Tax</span>
          <span>${tax.toFixed(2)}</span>
        </div>
      </div>
      <div className="w-full mx-auto h-[1px] bg-gray-400 rounded my-3"></div>
      <div className="mb-4 rounded-lg  bg-white py-3 px-2 flex items-center justify-between flex-row">
        <input
          type="text"
          placeholder="Apply promo code"
          className="w-2/3 rounded-l-lg text-[#232A47] placeholder:text-[#232A47] text-sm focus:outline-none"
        />
        <button className="w-1/3   bg-white text-sm text-indigo-900 rounded-r-lg font-semibold">
          Apply now
        </button>
      </div>

      <div className="flex justify-between items-center font-bold text-l">
        <span>Total Rental Price</span>
        <span>${totalPrice.toFixed(2)}</span>
      </div>
      <p className="text-xs text-gray-300">
        Overall price and includes rental discount
      </p>
    </div>
  );
};

export default Card;

import React from "react";
import Cart from './Cart'

function Item() {
  const shoeNike = (
    <div className="shadow-2xl sm:max-w-[300px] rounded-xl tracking-wide">
      <img src="/shoe.jpg" alt="shoe" className="rounded-t-lg" />
      <div className="p-3">
        <h3 className="font-bold text-xl mb-2">Nike AirForce 96</h3>
        <p className="text-gray-700 text-base mb-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, earum?
        </p>
        <button className="py-2 px-4 bg-transparent text-blue-600 font-semibold border border-blue-600 rounded hover:bg-blue-600 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0">
          Add to cart
        </button>
      </div>
    </div>
  );
  return (
    <div className="space-y-4 grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 place-items-center">
      {shoeNike}
      {shoeNike}
      {shoeNike}
      {shoeNike}
    </div>
  );
}

export default Item;

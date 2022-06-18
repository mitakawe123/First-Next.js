import React, { useState, useContext, useEffect } from "react";
import { Context } from "../Context/Context";

export default function Product() {
  // const [itemShop, setItemsShop] = useState([]);
  const { data } = useContext(Context);
  return (
    <>
      {data.slice(0, 3).map((item, index) => {
        const { title, description, image, price } = item;
        return (
          <div
            className="shadow-2xl sm:max-w-[300px] rounded-xl tracking-wide"
            key={index}
          >
            <img src={image} alt="shoe" className="rounded-t-lg" />
            <div className="p-3">
              <h3 className="font-bold text-xl mb-2">{title}</h3>
              <p className="text-gray-700 text-base mb-2">{description}</p>
              <div className="flex justify-between items-center">
                <button className="py-2 px-4 bg-transparent text-blue-600 font-semibold border border-blue-600 rounded hover:bg-blue-600 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0">
                  Add to cart
                </button>
                <span>{price}$</span>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

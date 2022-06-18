import React from "react";
import Cart from "./Cart";
import { NextPage } from "next";
import Product from "./Product";

export default function Shop() {
  return (
    <div className="space-y-4 grid laptop:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 place-items-center w-screen">
      <Product />
    </div>
  );
}

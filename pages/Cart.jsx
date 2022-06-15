import React from "react";
import Link from 'next/link'

function Cart() {
  return (
    <div>
      <Link href='/CheckOut'>
        Finish Shopping
        </Link>
    </div>
  );
}

export default Cart;

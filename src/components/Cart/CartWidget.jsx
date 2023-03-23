import React, { useContext } from "react";
import { RiShoppingCartLine } from "react-icons/ri";
import { CartContext } from "../../context/CartContext";

export function CartWidget () {
  const cartContext = useContext(CartContext);
  const { cart } = cartContext;

  return (
    <div className="hover:bg-orange-200 p-2 rounded-full transition-colors relative flex ">
      <span className="absolute -top-1.5 -right-1 bg-[#06283dde] text-white p-0.5 px-2 rounded-full text-sm font-semibold ">
        {cart.length}
      </span>
      <RiShoppingCartLine className="text-2xl text-[#06283D]" />
    </div>
  );
};


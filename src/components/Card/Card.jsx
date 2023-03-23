import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

export default function Card (item) {
  const { id, title, picture, unit_price } = item;
  const cartContext = useContext(CartContext)
  const { cart, addToCart } = cartContext

  const onAdd = (qty) => {
    addToCart(item, qty)
  }

  return (
    <div className="bg-white max-w-xs rounded-lg shadow-xl hover:shadow-2xl transition-all ">
      <Link to={`/product/${id}`}>
        <div className="py-4 px-5 flex flex-col ">
          <h1 className="text-2xl font-bold text-gray-700">
            {title}
          </h1>
        </div>
        <div className="flex justify-center items-center">
          <img src={picture} alt="img" className="w-60 object-contain h-56 " />
        </div>
      </Link>
      <div className="bg-orange-300 p-2 flex rounded-bl-lg rounded-br-lg flex-col">
        <span className="text-gray-700 font-bold text-xl mb-2 text-center">$ {unit_price},00</span>
        <ItemCount cart={cart} stock={item.stock} initial={1} onAdd={onAdd} />
      </div>
    </div>
  );
}

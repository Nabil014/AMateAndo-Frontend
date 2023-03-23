import React from "react";
import { Link } from 'react-router-dom'
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { RiDeleteBinLine, RiCloseFill, RiDeleteBin5Fill } from "react-icons/ri";
// import Payment from "../Payment/Payment";

export function Cart ({ visible, onClose }) {
  const cartContext = useContext(CartContext);
  const { cart, deleteItem, refreshQty, deleteCart } = cartContext;

  const totalCart = cart
    .map((e) => e.quantity * e.unit_price)
    .reduce((p, current) => p + current, 0);

  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };

  const refreshQty2 = (title, num) => {
    let index = cart.findIndex((el) => el.title === title);
    let product = cart[index];
    if (product.quantity === 0 && num === -1) {
      return
    }

    if (product.quantity === product.stock && num === +1) {
      return
    } else {
      refreshQty(title, num);
    }
  };

  if (!visible) return null;
  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center z-50"
    >
      <div className="bg-white w-[90vw] p-2 rounded xl:w-[75vw] xl:h-[70vh] md:w-[85vw] lg:w-[85vw] relative h-[50vh] overflow-y-auto scrollbar-thumb-slate-400 scrollbar-track-white scrollbar-thin">
        <button
          onClick={onClose}
          className="absolute top-0 right-0 m-3 mt-2 box-content text-xl hover:scale-110 transition-transform"
        >
          <RiCloseFill />
        </button>
        <h1 className="mt-4 m-2 text-lg">
          Productos en el carrito ({cart.length})
        </h1>

        {cart.length !== 0 ? (
          cart.map((e) => {
            return (
              <div key={e.title}>
                <div className="flex justify-around items-center">
                  <img
                    src={e.picture}
                    alt="img"
                    className="w-16 xl:w-24 md:w-24 object-contain rounded-lg shadow-lg"
                  />
                  <h1 className="text-lg font-semibold">{e.title}</h1>
                  <div className="flex flex-col justify-end items-end">
                    <div className="flex gap-5 justify-center items-center rounded-lg border-solid border-2 p-2">
                      <button
                        className="text-xl font-bold xl:px-1.5 lg:px-1.5 md:px-1.5 py-0 rounded-ful items-start justify-center flex"
                        onClick={() => refreshQty2(e.title, -1)}
                      >
                        -
                      </button>
                      <p>{e.quantity}</p>
                      <button
                        className="text-xl font-bold"
                        onClick={() => refreshQty2(e.title, +1)}
                      >
                        +
                      </button>
                    </div>
                    <p className="text-sm text-gray-500 top-1 relative">
                      {e.stock} disponibles{" "}
                    </p>
                  </div>
                  <span className="font-semibold lg:text-lg">$ {e.unit_price},00</span>
                  <button onClick={() => deleteItem(e.title)}>
                    <RiDeleteBinLine className="text-xl hover:text-red-500 transition-colors" />
                  </button>
                </div>
                <hr className="m-2" />
              </div>
            );
          })
        ) : (
          <div className="flex items-center justify-center h-[30vh]">
            <h3 className="text-[#666666] text-2xl tracking-[0.5px]">
              Aún no tienes productos en el carrito
            </h3>
          </div>
        )}
        <div className="flex justify-between xl:mr-20 xl:item-center md:pt-14 lg:pt-10 lg:m-5 lg:mb-0 lg:mr-16 md:mr-10 xl:text-lg lg:text-lg text-xs mr-4 font-bold text-[#06283D]">
          <button
            className="flex flex-col xl:flex-row lg:flex-row lg:text-sm lg:gap-2 lg:p-2 lg:font-semibold justify-center items-center xl:gap-2 border-solid border-2 md:text-base text-xs xl:text-lg xl:font-semibold border-[#06283D] rounded-lg xl:p-1 p-1 hover:bg-[#06283D] hover:text-white transition-colors "
            onClick={() => deleteCart()}
          >
            <RiDeleteBin5Fill /> Vaciar carrito
          </button>
          <div className="flex">
            <h1 className="mr-8 text-base lg:text-xl">Total a pagar: </h1>
            <span className="text-lg lg:text-xl">$ {totalCart},00</span>
          </div>
        </div>
        <div className="flex justify-end mt-2" >
          <Link to={'/checkout'}>
            <button disabled={cart.length === 0 ? true : false} className={cart.length === 0 ? "cursor-not-allowed bg-[#F49D1A]  transition-all rounded-lg mr-10 p-1.5 text-[#06283D] font-semibold" : "bg-[#F49D1A] hover:bg-orange-400 hover:shadow-sm hover:border-solid hover:border-orange-500 transition-all rounded-lg mr-10 p-1.5 text-[#06283D] font-semibold"}>Iniciar pago</button>
          </Link>
        </div>
      </div>
    </div>
  );
};



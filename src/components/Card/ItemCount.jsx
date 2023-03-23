import React, { useState } from "react";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [qty, setQty] = useState(initial);
  const [showButton, setShowButton] = useState(false);

  const addProduct = (num) => {
    setQty(qty + num);
  };


  return (
    <div>
      <div className="flex gap-2 justify-between items-center">
        <div className="grid grid-cols-3 gap-1">

          <button
            onClick={() => addProduct(-1)}
            disabled={qty === initial ? true : false}
            className={qty === initial ? "invisible px-2" : "bg-[#263B44] rounded-full px-2 flex item-center justify-center  text-white font-semibold"}

          >
            -
          </button>
          <span className="flex justify-center items-center font-semibold">{qty}</span>
          <button
            onClick={() => addProduct(+1)}
            disabled={qty === stock ? true : false}
            className={qty === stock ? "invisible px-1" : "bg-[#263B44] px-1 flex item-center justify-center rounded-full text-white font-semibold "}
          >
            +
          </button>
        </div>
        <button onClick={() => { onAdd(qty); setShowButton(true) }} disabled={stock === 0 ? true : false} className=" text-[#263B44] text-sm bg-[#d89a7b] hover:bg-[#e2a98d] rounded-lg p-1 px-2 hover:duration-400 transition-colors duration-200 font-semibold outline-none hover:transition-colors ml-4">Añadir al carrito</button>
      </div>
    </div>
  );
};

export default ItemCount;

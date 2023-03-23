import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { useAuth } from "../../context/authContext";
import { NavBar } from "../NavBar/NavBar";
import ModalShipping from "./ModalShipping";
import { AiOutlinePlus } from "react-icons/ai";
import ShippingMethod from "./ShippingMethod";


export function Payment () {
  const [showModal, setShowModal] = useState(false)
  const [infoShipping, setInfoShipping] = useState([])
  const [shipping, setShipping] = useState(null);
  const [error, setError] = useState(null)
  const cartContext = useContext(CartContext);
  const { user } = useAuth()
  const { cart } = cartContext;

  const [inputs, setInputs] = useState({
    name: '',
    lastname: '',
    dni: '',
    cellphone: '',
    address: '',
    codPostal: '',
  })
  useEffect(() => {
    setInputs({ ...inputs, email: user?.email })
  }, [user])

  useEffect(() => {
    const dataShipping = JSON.parse(localStorage.getItem('shipping'))
    if (dataShipping) {
      setInfoShipping(dataShipping)
    }
  }, [])

  const totalCart = cart
    .map((e) => e.quantity * e.unit_price)
    .reduce((p, current) => p + current, 0)

  const total = totalCart + Number(shipping)

  const closeModal = () => setShowModal(false)

  console.log(shipping);
  return (
    <div>
      <NavBar />
      <div className="flex justify-around bg-slate-100 min-h-[calc(100vh-97px)]">
        {/* Opciones de envio */}
        <div className="flex flex-col w-[50%] mt-8 justify-around">
          <div className="flex flex-col gap-y-3">
            <h2 className="text-2xl font-semibold">Detalles del envío</h2>
            <hr />
            {/* Modal */}
            {
              <ul className="mb-10">
                {
                  infoShipping.length > 0 ? infoShipping?.map(item => (
                    <div>
                      <li className="border border-orange-200 text-gray-500 p-3 w-72 flex flex-col mb-3" key={item.dni}>
                        <div className="flex gap-2">
                          <h3>{item.name}</h3><h3>{item.lastname}</h3>
                        </div>
                        <span>{item.dni}</span>
                        <span>{item.cellphone}</span>
                        <span>{item.address}</span>
                        <span>{item.codPostal}</span>
                      </li>
                      <div>
                        <div>
                          <button onClick={() => { setShowModal(true) }} className="underline flex gap-1 items-center text-sm text-[#263B44] hover:text-[#547b8b]">
                            Cambiar dirección
                          </button>
                          <ModalShipping closeModal={closeModal} visible={showModal} inputs={inputs} setInputs={setInputs} />
                        </div>
                        <div >
                        </div>
                      </div>
                    </div>
                  )) :
                    <div>
                      <div>
                        <button onClick={() => { setShowModal(true) }} className="underline flex gap-1 items-center text-sm text-[#263B44] hover:text-[#547b8b]">
                          <AiOutlinePlus /> Agregar dirección
                        </button>
                        <ModalShipping closeModal={closeModal} visible={showModal} inputs={inputs} setInputs={setInputs} />
                      </div>
                      <div >
                      </div>
                    </div>

                }
              </ul>
            }
            <div className="flex flex-col gap-y-3">
              <h2 className="text-2xl font-semibold">Método de envío</h2>
              <hr />
              <ShippingMethod setShipping={setShipping} />
            </div>

          </div>
          <div className="pb-4 flex flex-col items-end mt-4">
            {
              error !== null ? <p className="text-red-500 w-[100%] font-semibold">Por favor completa los campos</p> : null
            }
            <button className="justify-center  w-32 p-1 flex  border-solid border-[1px] rounded-lg bg-orange-300 text-[#06283D] border-orange-300 hover:bg-orange-400 transition-colors font-semibold ">Siguiente</button>
          </div>
        </div>
        {/* Resumen de compra */}
        <div className=" bg-white min-h-[calc(screen-NavBar)] w-[25%] md:w-[30%] md:block hidden">
          <h1 className="text-lg font-semibold mt-12 m-4">Resumen de compra</h1>
          <hr className="ml-4 justify-center items-center w-[87%]" />
          <div className="flex flex-col ">
            <div className="flex justify-between m-4">
              <h1>Productos({cart.length})</h1>
              <h1 className="mr-4">$ {totalCart},00</h1>
            </div>
            <div className="flex justify-between m-4 mt-0">
              <h1>Envío</h1>
              <h1 className="mr-4">$ {shipping === null ? 0 : shipping},00</h1>
            </div>
          </div>
          <hr className="ml-4  justify-center items-center w-[87%]" />
          <div className="flex justify-between m-4 mt-5">
            <h1>Total</h1>
            <h1 className="mr-4">$ {total},00</h1>
          </div>
        </div>
      </div>
    </div>
  );
};


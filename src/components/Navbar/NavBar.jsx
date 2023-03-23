import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

import { CartWidget } from '../Cart/CartWidget'
import { Cart } from '../Cart/Cart'

import logo from "../../assets/fondo.jpeg";
import { RiSearchLine, RiShoppingCartLine } from "react-icons/ri";
import { RxExit } from "react-icons/rx";
import { useAuth } from '../../context/authContext';


export function NavBar () {
  const [product, setProduct] = useState("");
  const [showCart, setShowCart] = useState(false);

  const { user, logout, loading } = useAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    await logout()
  }

  const handleOnClose = () => setShowCart(false);

  return (
    <div className="z-2 bg-orange-300 h-25 w-full flex items-center justify-between border-b-[1px] border-[#06283D] border-solid">
      <Link to="/">
        <img
          src={logo}
          alt="img"
          className="h-[6rem] cursor-pointer relative -z-1"
        />
      </Link>

      {
        <div>
          <div className=" relative block group">
            <input
              placeholder="Buscar.."
              className="outline-none text-[#06283da8] font-normal focus:border-[#06283da8] focus:ring-[#06283db2] focus:ring-2 focus:shadow-lg focus:scale-105 max-sm:w-32 md:w-72 lg:w-80 xl:w-96 transition-all py-2 pr-8 pl-9  rounded-full italic"
              type="text"
            />
            <RiSearchLine className="absolute left-2 top-1/4 -traslate-y-1/2 text-[#06283D] group-focus-within:-translate-x-2 group-focus-within:text-xl group-focus-within:justify-center transition-all " />
            {product !== "" ? (
              <RiCloseCircleLine
                onClick={clearInput}
                className="absolute cursor-pointer right-5 top-1/4 -traslate-y-1/2 text-red-500 hover:scale-110 hover:text-[17px] hover:items-center hover:bg-red-500 hover:text-white ease-out hover:transition-all transition-all rounded-full"
              />
            ) : (
              ""
            )}
          </div>
        </div>
      }
      {
        user ?
          <div className='flex p-3 items-center gap-4'>
            <div>
              <button onClick={() => setShowCart(true)}>
                <CartWidget />
              </button>
              <Cart onClose={handleOnClose} visible={showCart} />
            </div>
            <button className='hover:bg-orange-200 p-1 hover:rounded-md' title='Cerrar sesión' onClick={handleLogout}><RxExit className='text-xl' /></button>
          </div>
          :
          <div className="flex flex-row-reverse z-50">
            <Link to='/login'>
              <div className="flex gap-1 p-2 rounded-full transition-colors cursor-pointer group">
                <button
                  className="
            inline-block
                relative
                cursor-pointer
                transition-all
                duration-300
                before:content-['']
                before:absolute
                before:-bottom-0.5
                before:left-1/2
                before:-translate-x-1/2
                before:w-0
                before:h-[1.6px]
                before:rounded-full
                before:opacity-0
                before:transition-all
                before:duration-300
                before:bg-[#06283D]
                group-hover:before:w-full
                group-hover:before:opacity-100"
                >
                  Ingresá
                </button>
              </div>
            </Link>
            <Link to='/register'>
              <div className="flex gap-1 p-2 rounded-full transition-colors cursor-pointer group">
                <button
                  className="
            inline-block
                relative
                cursor-pointer
                transition-all
                duration-300
                before:content-['']
                before:absolute
                before:-bottom-0.5
                before:left-1/2
                before:-translate-x-1/2
                before:w-0
                before:h-[1.6px]
                before:rounded-full
                before:opacity-0
                before:transition-all
                before:duration-300
                before:bg-[#06283D]
                group-hover:before:w-full
                group-hover:before:opacity-100"
                >
                  Creá tu cuenta
                </button>
              </div>
            </Link>
          </div>
      }

    </div>
  )
}


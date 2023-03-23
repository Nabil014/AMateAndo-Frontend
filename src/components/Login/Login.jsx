import React, { useState } from 'react'
import { useAuth } from '../../context/authContext';
import { Link, useNavigate } from 'react-router-dom'

import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";

export function Login () {
  const [show, setShow] = useState(false);
  const [error, setError] = useState('')
  const { login, loginWithGoogle, resetPassword } = useAuth()
  const navigate = useNavigate()

  const [user, setUser] = useState({
    password: '',
    email: ''
  })

  const switchShow = () => setShow(!show);

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value })

  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      await login(user.email, user.password)
      navigate('/')
    } catch (error) {
      setError(error.message)
      console.log(error.message)
    }
  }

  const handleLoginGoogle = async () => {
    try {
      await loginWithGoogle()
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  const handleResetPassword = async () => {
    if (!user.email) return setError('Por favor ingresa tu email')

    try {
      await resetPassword(user.email)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='bg-gray-100 min-h-screen flex justify-center items-center flex-col'>
      <div className='max-w-4xl'>

        <div className="border-solid border-[1px] border-[#2886a8] rounded-lg shadow-xl h-full p-10">
          <form onSubmit={handleSubmit} >
            <div className="flex flex-col gap-10  mt-4">
              <div className="border bg-transparent focus-within:border-[#3A98B9] focus-within:text-[#3A98B9] transition-all duration-300 relative rounded p-1">
                <div className="-mt-6 absolute tracking-wider px-1 uppercase text-xs">
                  <label className="bg-transparent text-gray-600 px-1">
                    Email <span className='text-red-600'>*</span>
                  </label>
                </div>
                <input
                  id="email"
                  name='email'
                  type="email"
                  onChange={handleChange}
                  placeholder='email@example.com'
                  required
                  className="py-1 px-1 bg-transparent outline-none block h-full w-full"
                />
              </div>

              <div className="border bg-transparent focus-within:border-[#3A98B9] focus-within:text-[#3A98B9] transition-all duration-300 relative rounded p-1">
                <div className="-mt-6 absolute tracking-wider px-1 uppercase text-xs">
                  <label className="bg-transparent text-gray-600 px-1">
                    Contraseña <span className='text-red-600'>*</span>
                  </label>
                </div>
                <input
                  id="password"
                  name='password'
                  placeholder='********'
                  onChange={handleChange}
                  type={show ? "text" : "password"}
                  className="py-1 bg-transparent px-1 outline-none block h-full w-full"
                />
                <div className="flex top-3 right-6 absolute">
                  <button className="absolute" type="button" onClick={switchShow}>
                    {show ? <RiEyeOffFill /> : <RiEyeFill />}
                  </button>
                </div>
              </div>
              <div className=" items-center justify-center flex ">
                <button className="rounded w-full text-white px-3 py-1 bg-orange-500 hover:shadow-inner hover:bg-orange-400 transition-all duration-300">
                  Iniciar sesión
                </button>
              </div>
            </div>
            <div className='w-full p-2 mt-4 font-bold text-xs hover:underline justify-center flex'>
              <button onClick={handleResetPassword}>¿Olvidaste tu contraseña?</button>
            </div>
          </form>
        </div>
        <div className='py-5'>
          <div className='flex justify-between mb-4'>
            <p>¿No tienes una cuenta?</p><Link className='font-semibold hover:underline' to='/register'>Regístrate</Link>
          </div>
          <button onClick={handleLoginGoogle} className="rounded w-full text-black px-3 py-1 bg-white hover:shadow-lg  transition-all duration-300">
            Iniciar sesión con Google
          </button>
        </div>
      </div>
    </div>
  )
}

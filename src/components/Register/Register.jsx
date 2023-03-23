import React, { useState } from 'react'
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";
import { useAuth } from '../../context/authContext';
import { useNavigate } from 'react-router-dom'

export function Register () {
  const [show, setShow] = useState(false);
  const [error, setError] = useState('')
  const { singup } = useAuth()
  const navigate = useNavigate()
  const [user, setUser] = useState({
    name: '',
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
      await singup(user.email, user.password)
      navigate('/')
    } catch (error) {
      setError(error.message)
      console.log(error.message)
    }

  }

  return (
    <div className='bg-gray-100 min-h-screen'>
      <form onSubmit={handleSubmit} className="p-24 max-w-2xl">
        <div >
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="border bg-transparent focus-within:border-[#3A98B9] focus-within:text-[#3A98B9] transition-all duration-500 relative rounded p-1">
              <div className="-mt-6 absolute tracking-wider px-1 uppercase text-xs">
                <label className="bg-transparent text-gray-600 px-1">
                  Nombre <span className='text-red-600'>*</span>
                </label>
              </div>
              <input
                name="name"
                type="text"
                required
                onChange={handleChange}
                className="py-1 px-1 bg-transparent text-gray-900 outline-none block h-full w-full"
              />
            </div>
            <div className="border bg-transparent focus-within:border-[#3A98B9] focus-within:text-[#3A98B9] transition-all duration-500 relative rounded p-1">
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

            <div className="border bg-transparent focus-within:border-[#3A98B9] focus-within:text-[#3A98B9] transition-all duration-500 relative rounded p-1">
              <div className="-mt-6 absolute tracking-wider px-1 uppercase text-xs">
                <label className="bg-transparent text-gray-600 px-1">
                  Contraseña <span className='text-red-600'>*</span>
                </label>
              </div>
              <input
                id="password"
                name='password'
                required
                onChange={handleChange}
                type={show ? "text" : "password"}
                className="py-1 bg-transparent px-1 outline-none block h-full w-full"
              />
              <div className="flex top-3 right-6 absolute">
                <button className="absolute" type="button" onClick={switchShow}>
                  {show ? <RiEyeFill /> : <RiEyeOffFill />}
                </button>
              </div>
            </div>
          </div>
          <div className="border-t mt-6 pt-3 items-center justify-center flex">
            <button className="rounded text-white px-3 py-1 bg-orange-500 hover:shadow-inner hover:bg-orange-400 transition-all duration-300">
              Registrarme
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

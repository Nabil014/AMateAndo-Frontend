import React from 'react'
import { useAuth } from "../../context/authContext";

import { RiCloseFill } from 'react-icons/ri';

export function ModalShipping ({ closeModal, visible, inputs, setInputs }) {
  const { user } = useAuth()


  const handleChange = ({ target: { name, value } }) => {
    setInputs({ ...inputs, [name]: value, email: user?.email, id: user?.uid })
  }
  const handleSave = () => {
    localStorage.setItem('shipping', JSON.stringify([inputs]))
  }

  if (!visible) return null

  return (
    <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center z-50'>
      <div className='relative'>
        <button className='absolute top-1 right-2  text-2xl hover:scale-110 transition-transform' onClick={closeModal}><RiCloseFill /></button>
        <div className='bg-white p-5'>
          <form className='flex flex-col'>
            <div className='grid grid-cols-2 gap-4 mb-2'>
              <div className='flex flex-col gap-y-1'>
                <span>Nombre</span>
                <input className='border' onChange={handleChange} type="text" name='name' placeholder='Nombre' />
              </div>
              <div className='flex flex-col gap-y-1'>
                <span>Apellido</span>
                <input className='border' onChange={handleChange} type="text" name='lastname' placeholder='Apellido' />
              </div>
              <div className='flex flex-col gap-y-1'>
                <span className='flex gap-1'>DNI <p className='text-red-500'>*</p></span>
                <input className='border' onChange={handleChange} type="number" name='dni' placeholder='DNI' />
              </div>
              <div className='flex flex-col gap-y-1'>
                <span>Teléfono</span><p className='text-red-500'>*</p>
                <input className='border' onChange={handleChange} type="number" name='cellphone' placeholder='Cód. Area (ej.11) número' />
              </div>
            </div>
            <span>Domicilio</span><p className='text-red-500'>*</p>
            <input className='border' onChange={handleChange} type="text" name='address' placeholder='Dirección' />
            <div className='flex gap-2'>
              <input className='border' type="text" placeholder='Número' />
              <input className='border' type="text" placeholder='Piso' />
              <input className='border' type="text" placeholder='Departamento' />
            </div>
            <span>Provincia</span><p className='text-red-500'>*</p>
            <select placeholder='Por favor seleccione una provincia'>
              <option value="Buenos Aires">Buenos Aires</option>
              <option value="Capital Federal">Capital Federal</option>
              <option value="Catamarca">Catamarca</option>
              <option value="Chaco">Chaco</option>
              <option value="Chubut">Chubut</option>
              <option value="Córdoba">Córdoba</option>
              <option value="Corrientes">Corrientes</option>
              <option value="Entre Rios">Entre Rios</option>
              <option value="Formosa">Formosa</option>
              <option value="Jujuy">Jujuy</option>
              <option value="La Pampa">La Pampa</option>
              <option value="La Rioja">La Rioja</option>
              <option value="Mendoza">Mendoza</option>
              <option value="Misiones">Misiones</option>
              <option value="Neuquén">Neuquén</option>
              <option value="Rio Negro">Rio Negro</option>
              <option value="Salta">Salta</option>
              <option value="San Juan">San Juan</option>
              <option value="San Luis">San Luis</option>
              <option value="Santa Cruz">Santa Cruz</option>
              <option value="Santa Fé">Santa Fé</option>
              <option value="Santiago del Estero">Santiago del Estero</option>
              <option value="Tierra del Fuego">Tierra del Fuego</option>
              <option value="Tucumán">Tucumán</option>
            </select>
            <span>Código Postal</span>
            <input className='border' onChange={handleChange} name='codPostal' type="number" />
            <button onClick={handleSave}>Guardar</button>
          </form>
        </div>
      </div>
    </div>
  )
}

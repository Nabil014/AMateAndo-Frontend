import React from 'react';

const ShippingMethod = ({ setShipping }) => {

  const handleShippingMethodChange = (event) => {
    setShipping(event.target.value);
  };

  return (
    <div className='flex flex-col gap-y-2'>
      <label className='flex gap-x-3'>
        <input
          type="radio"
          name="shippingMethod"
          value="0"
          onChange={handleShippingMethodChange}
        />
        <p className='font-semibold'>$0.00</p> Retiro en el local
      </label>

      <label className='flex gap-x-3'>
        <input
          type="radio"
          name="shippingMethod"
          value="600"
          onChange={handleShippingMethodChange}
        />
        <p className='font-semibold'>$600</p> Entrega en sucursal de correo
      </label>

      <label className='flex gap-x-3'>
        <input
          type="radio"
          name="shippingMethod"
          value="1400"
          onChange={handleShippingMethodChange}
        />
        <p className='font-semibold'>$1.400</p> Entrega en domicilio
      </label>
    </div>
  );
};

export default ShippingMethod;

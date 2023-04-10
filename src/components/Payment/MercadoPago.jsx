import React from 'react'
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'

initMercadoPago('TEST-ccc33d28-19d8-4de4-8c36-d96382827cb6');
export function MercadoPago (preferenceId) {
  const renderCheckoutButton = (preferenceId) => {
    if (!preferenceId) return null;

    return (
      <Wallet
        initialization={{ preferenceId: preferenceId }}
      />
    )
  }
  return (
    <div>
      {renderCheckoutButton(preferenceId)}
    </div>
  )
}

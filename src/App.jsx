import { Routes, Route } from 'react-router-dom'
import { Home } from './components/Home/Home'
import { Login } from "./components/Login/Login"
import { Register } from './components/Register/Register'
import { AuthProvider } from './context/authContext'
import { ProtectedRoutes } from './components/ProtectedRoutes/ProtectedRoutes'
import CartProvider from './context/CartContext'
import { Payment } from './components/Payment/Payment'


function App () {

  return (
    <div>
      <AuthProvider>
        <CartProvider>
          <Routes>
            <Route path='/' element={<Home />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/checkout" element={<Payment />} />
          </Routes>
        </CartProvider>
      </AuthProvider>
    </div>
  )
}

export default App

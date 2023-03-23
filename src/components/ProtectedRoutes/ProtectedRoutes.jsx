import { Navigate } from 'react-router-dom'
import { useAuth } from '../../context/authContext'

export function ProtectedRoutes ({ children }) {
  const { user, loading } = useAuth()

  if (loading) return <h2>loading...</h2>
  if (!user) return <Navigate to='/login' />
  return (
    <>{children}</>
  )
}

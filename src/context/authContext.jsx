import { createContext, useContext, useEffect, useState } from 'react'
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail
} from 'firebase/auth'
import { auth } from '../services/firebase'

const authContext = createContext()
export const useAuth = () => {
  return useContext(authContext)
}
export function AuthProvider ({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const singup = async (email, password) => await createUserWithEmailAndPassword(auth, email, password)
  const login = async (email, password) => await signInWithEmailAndPassword(auth, email, password)
  const logout = async (email, password) => await signOut(auth)

  const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider()
    return signInWithPopup(auth, googleProvider)
  }

  const resetPassword = async (email) => sendPasswordResetEmail(auth, email)


  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      setLoading(false)
    })

    return () => unsuscribe()

  }, [])


  return <authContext.Provider value={{ singup, login, user, logout, loading, loginWithGoogle, resetPassword }}>{children}</authContext.Provider>
}

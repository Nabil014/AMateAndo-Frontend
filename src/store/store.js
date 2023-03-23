import axios from 'axios'
import { create } from 'zustand'

export const useProductStore = create((set) => ({
  products: [],
  getProducts: async () => {
    const res = await axios('/api/product')
    const json = await res.data
    set((state) => ({
      ...state,
      products: json,
    }))
  },
}))

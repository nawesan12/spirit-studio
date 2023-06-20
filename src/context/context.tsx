import { createContext, useMemo, useState } from "react"
import type { Product, TCartProvider } from "@/types/types"

export const CartContext = createContext({} as TCartProvider)

export function CartProvider({ children }: { children: React.ReactNode }) {

  const [cartItems, setCartItems] = useState([] as Product[])

  const addToCart = (item: Product) => {
    setCartItems((prevItems) => [...prevItems, item])
  }

  const removeFromCart = (item: Product) => {
    setCartItems((prevItems) => prevItems.filter((i: Product) => i.id !== item.id))
  }

  const cartContextValue = useMemo(() => ({
    cartItems,
    addToCart,
    removeFromCart
  }), [cartItems])

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  )
}
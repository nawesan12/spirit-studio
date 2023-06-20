"use client"
import { CartContext } from "@/context/context"
import { useContext } from "react"

export default function ProductsCheckout() {

  const { cartItems } = useContext(CartContext)

  return (
    <>
      {
        cartItems ? (
          <ul>
            {
              cartItems.map((item, index) => (
                <li key={index}>
                  {item.name}
                </li>
              ))
            }
          </ul>

        ) : (
          <p>No agregaste ningun producto!</p>
        )
      }
    </>
  )
}
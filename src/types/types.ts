export type Size = "S" | "M" | "L" | "XL" | "XXL"

export type Color = "White" | "Black" | "Red" | "Pink" | "Bone"

export type Product = {
  id: number,
  name: string,
  price: number,
  description: string,
  sizes: Size[],
  colors: Color[]
}

export type TCartProvider = {
  cartItems: Product[],
  addToCart: Function,
  removeFromCart: Function
}
import { Product } from "./product.model"

export const products: Product[] = []

export const addProduct = (data: Product) => {
  products.push(data)
}

export const calculateStock = (): number => {
  return products.reduce((acc, curr) => {
    return acc + curr.stock
  }, 0)
}

import { addProduct, calculateStock, products } from "./product.service";

addProduct({
  name: "Shirt",
  createdAt: new Date(),
  stock: 20,
  size: "S"
})

addProduct({
  name: "Pants",
  createdAt: new Date(),
  stock: 40,
  size: "M"
})

console.log(`total stock: ${calculateStock()}`)

console.log(products)

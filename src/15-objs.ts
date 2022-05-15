(()=>{
  type Sizes = 'S' | 'M' | 'L' | 'XL'
  type Product = {
    title: string,
    createdAt: Date,
    stock: number,
    size: Sizes
  }

  const products: Product[] = []

  const addProduct = (data: Product) => {
    products.push(data)
  }

  addProduct({
    title: 'Shirt',
    createdAt: new Date(),
    stock: 5,
    size: 'S'
  })

  console.log(products)
})()

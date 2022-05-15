(()=> {
  type Sizes = 'S' | 'M' | 'L' | 'XL'

  function createProductToJSON(
    title: string,
    createdAt: Date,
    stock: number,
    size: Sizes
  ){
    return {
      title,
      createdAt,
      stock,
      size
    }
  }

  const product1 = createProductToJSON('Shirt', new Date(), 5, 'S')
  console.log(product1)

  const createProductToJSONV2 = (
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  ):Object => {
    return {
      title,
      createdAt,
      stock,
      size
    }
  }

  const product2 = createProductToJSONV2('Shirt', new Date(), 5)
  console.log(product2)

  const product3 = createProductToJSONV2('Shirt', new Date(), 5, 'S')
  console.log(product3)
})()

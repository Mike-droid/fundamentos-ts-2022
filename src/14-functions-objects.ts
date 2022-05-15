(()=>{
  type Sizes = 'S' | 'M' | 'L' | 'XL'

  const login = (data: {email: string, password: string}) => {
    console.log(data.email, data.password);
  }

  login({
    email: 'miguelreyesmoreno@hotmail.com',
    password: 'secret password!'
  });

  const products: any[] = []

  const addProduct = (data: {
    title: string,
    createdAt: Date,
    stock: number,
    size: Sizes
  }) => {
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

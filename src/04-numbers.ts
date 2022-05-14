(()=>{
  let productPrice = 100
  productPrice = 120
  console.log('productPrice', productPrice)

  let customerAge: number = 23
  customerAge += 1
  console.log('customerAge', customerAge)

  /* let productInStock: number
  console.log('productInStock', productInStock) // undefined */
  //! Obligatoriamente debemos indicar el tipo de dato si no la inicializamos
  //!console.log('productInStock', productInStock) no podemos imprimir el valor poque aún no está inicializado

  let discount = parseInt('123')
  console.log('discount', discount)

  discount <= 200 ? console.log('apply') : console.log('no apply')

  let hex = 0xfff
  console.log('hex', hex) //4095

  let bin = 0b1010
  console.log('bin', bin) //10
})()

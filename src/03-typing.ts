//* Función anónima autoejecutada

(() => {
  let myProductName = 'Product 1'
  let myProductPrice = 123

  //!myProductName = 123 no podemos hacer esto
  myProductName = 'change'
  myProductName.toUpperCase()

  myProductPrice.toString()

  const myProductStock = 1000
  //! myProductStock = 2000; no podemos hacerlo porque es una constante

})();

//* Hacemos esto para poder usar los mismos nombres de variables en otros archivos de TS.

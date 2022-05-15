(()=>{
  type UserID = string | number //*alias type

  //* Literal types
  type Sizes = 'S' | 'M' | 'L' | 'XL'
  /* let shirtSize: Sizes
  shirtSize = 'S'
  // shirtSize = 'Large' //! Error */

  function greeting(userId: UserID, size: Sizes) {
    console.log(`Hello ${userId} your t-shirt size is ${size}`)
  }

  greeting(1, 'S')
})()

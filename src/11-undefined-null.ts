(()=>{
  function hi(name: string | null) {
    let hello = 'hola '
    hello += name?.toUpperCase() || 'nobody'
    console.log(hello)
  }

  hi('Miguel')
  hi(null)
})()

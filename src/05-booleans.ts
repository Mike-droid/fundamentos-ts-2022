(()=>{
  let isEnable = true
  console.log(`isEnable: ${isEnable}`)

  let isNew: boolean = false
  console.log(`isNew: ${isNew}`)

  const random = Math.random()
  console.log(`random: ${random}`)
  isNew = random > 0.5
  console.log(`isNew: ${isNew}`)
})()

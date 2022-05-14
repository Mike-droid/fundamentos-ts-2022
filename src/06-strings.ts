(() => {
  let productTitle = 'My amazing product'
  productTitle = 'Updated product'
  console.log(productTitle)

  let productDescription = 'This is a great product'
  productDescription.toUpperCase()
  console.log(productDescription)

  const summary = `
    title: ${productTitle}
    description: ${productDescription}
  `

  console.log(summary)
})()

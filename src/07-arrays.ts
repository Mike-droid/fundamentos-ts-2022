(()=>{
  let prices = [10, 20, 30];
  prices.push(40);

  let products: (number | string | boolean | object)[] = [10, 'ten', true];
  products.push('eleven');
  products.push(11);
  products.push(false);
  products.push({hello: 'world'});
  console.log(products);

  let prices2: number[] = [10, 20, 30];
  prices2.map(price => price * 2);
})()

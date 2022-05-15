(() => {
  const total = (prices: number[]): number => {
    return prices.reduce((acc, price) => acc + price, 0)
  }

  const printTotal = (prices: number[]): void => {
    console.log(total(prices))
  }

  printTotal([1, 2, 3, 4, 5])
})()

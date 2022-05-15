(()=>{
  let userId: string | number;
  userId = '123';
  userId = 123;

  function greeting(myText: string | number) {
    typeof myText === 'string' ? console.log(myText.toUpperCase()) : console.log(myText + 5);
  }

  greeting('platzi')
  greeting(5)
})()

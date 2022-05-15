(()=>{
  let myDynamicVar: any = "Hello";
  myDynamicVar = 1;
  myDynamicVar = true;
  myDynamicVar = {};
  myDynamicVar = [];
  myDynamicVar = ()=>{};
  myDynamicVar = null;
  myDynamicVar = undefined;

  //! mala práctica de TS, trata de NO usarlo

  myDynamicVar = 'Hola'
  const rta = (myDynamicVar as string).toUpperCase();
  console.log(rta);

  myDynamicVar = 1212
  const rta2 = (<number>myDynamicVar).toFixed(2);
  console.log(rta2);
})()

# Curso de Fundamentos de TypeScript

## Introducción a TypeScript

### Por qué usar TS

TS ha sigo muy bien aceptado por la comunidad de los developers.

También ha sido descargado mucho en NPM a lo largo del tiempo.

Es el 2do lenguaje más amado, según una encuesta del 2020 en Stack Overflow.

VueJS y ReactJS lo pueden usar para prevenir errores.

Algunas herramientas que están escritas directamente en TS:

- Jest
- nest
- Vue.js
- Redux
- Angular
- TypeORM
- ionic
- Svelte
- GitHub

Algunas compañías que lo usan:

- Slack
- airbnb

Requisitos:

- Tener NodeJS instalado
- Un editor de código (VS es excelente)
- Un navegador web

### TS VS JS

TypeScript:

- EsNext
  - JavaScript

> Mientras más rápido encuentres un error, más rápido podrás arreglarlo.

### Configurando nuestro proyecto

Para instalar TS en nuestro proyecto: `npm i typescript -D` y luego -> `npx tsc --version`

[gitignore.io](https://toptal.com/developers/gitignore)

### Atrapando bugs

Para analizar errores en un archivo JS podemos colocar esto al inicio: `//@ts-check`

### El compilador de TS

El código TS no es leído por navegadores ni servidores. Lo que se hace es transpilarlo a JS.

Podemos seleccionar una versión en específico de TS e indicar en dónde queremos que guarde el archivo JS: `npx stc src/*.ts --target es6 --outDir dist`

O mejor crea un archivo de configuración: `tsc --init`

```json
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}

```

### Veamos el TSConfig.json

`npx tsc --init`

Podemos dejar un watch para que se ejecute cada vez que se modifique un archivo: `npx tsc --watch`

## Tipos de datos primitivos

### Qué es el tipado en TypeScript

JS tiene tipos de datos primitivos, como:

- null
- string
- number
- boolean
- undefined
- array
- Symbol
- objs
- functions

TS ya incluye todo lo que JS maneja.

Nueva sintaxís en TS:

```typescript
const productPrice: number = 12;
```

### Tipos inferidos

TypeScript puede inferir el tipo de dato de una variable.

```typescript
let myProductName = 'Product 1'
let myProductPrice = 123
```

```typescript
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

```

### Numbers

Recomendación de la documentación de TS:

Nunca uses:

- Number
- String
- Boolean
- Symbol
- Object

Estos tipos de datos NO son primitivos, usa mejor.

- number
- string
- boolean
- symbol
- object

[Artículo en StackOverflow](https://stackoverflow.com/questions/15487220/typescript-primitive-types-any-difference-between-the-types-number-and-numbe)

### Boolean

```typescript
isNew: boolean = true
isOld: boolean = false
```

### Strings

Podemos usar ". '. `

### Arrays

Podemos indicar que queremos distintos tipos de datos en nuestros arrays: `let products: (number | string | boolean)[] = [10, 'ten', true];`

## Tipos de datos especiales

### Any

Trata de no usar Any en TS.

### Union types

VS Code nos ayuda en el scope del tipo de variable que usemos en nuestro código:

```typescript
function greeting(myText: string | number) {
  typeof myText === 'string' ? console.log(myText.toUpperCase()) : console.log(myText + 5);
}
```

### Alias y tipos literales

```typescript
(()=>{
  type UserID = string | number //*alias type

  //* Literal types
  type Sizes = 'S' | 'M' | 'L' | 'XL'

  function greeting(userId: UserID, size: Sizes) {
    console.log(`Hello ${userId} your t-shirt size is ${size}`)
  }

  greeting(1, 'S')
})()

```

### Null y Undefined

null y undefined son **diferentes**.

[Optional chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)

### Funciones

Podemos poner parámetros opcionales con ?

```typescript
const createProductToJSONV2 = (
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  ) => {
    return {
      title,
      createdAt,
      stock,
      size
    }
  }
```

### Retorno de funciones

Podemos indicar en las funciones si queremos que retorne un tipo de dato o un void.

### Objetos en funciones

```typescript
const login = (data: {email: string, password: string}) => {
  console.log(data.email, data.password);
}
```

### Objetos como tipos

Podemos crear nuestros objetos como nosotros lo necesitemos.

```typescript
type Product = {
  title: string,
  createdAt: Date,
  stock: number,
  size: Sizes
}

const products: Product[] = []
```

### Módulos: import y export

Es simplemente usar `export` e `import`.

### Usando librerías que soportan TypeScript

[date-fns](https://date-fns.org/docs/Getting-Started)

La instalamos con `npm i date-fns --save`

Las librerías con soporte para TS se integran muy bien a nuestros proyectos.

### Usando librerías que NO soportan TypeScript

[Lodash](https://lodash.com/)

`npm i lodash`

VS Code nos sugiere: `npm i --save-dev @types/lodash`

## examen

- ¿Cuál es el tipado correcto para crear una variable que soporte strings y null?: `let myName: (string|null) = null`
- ¿Cuál sería la forma correcta de definir un array que solo soporte números y booleanos?: `let mixed: (number|boolean)[]`
- ¿Cuál es la forma correcta de definir un hexadecimal en TS?: `let hex = 0xfff`
- ¿Cuál de las siguientes en la manera correcta de definir una parámetro opcional en una función?: `function sum(a?: number) {}`
- ¿Cuál de estas formas es la manera correcta de definir un objeto como parámetros de una función?: `function login(data: {email: string, password: string})`
- Teniendo en cuenta este código: `type Sizes = 'S' | 'M' | 'L' | 'XL';  let shirtSize: Sizes; shirtSize = 'xxl';` ¿El valor asignado a  shirtSize es válido?: no
- Una prueba práctica es definir un variable con un valor boolean de esta manera:  const myBoolean: Boolean = true; : no porque no se recomienda usar Boolean
- Si quiero declarar una función que no tiene retorno ¿cuál de las siguientes palabras reservadas de TS usaría?: void
- ¿Cuál es la opción correcta para decirle al compilador de TS la versión de JavaScript a la cual debe transpilar?: `npx tsc src/** --target es6`
- Cuando hay librerías que no tiene  soporte a tipos por ejemplo en el caso de  lodash podemos agregar el soporte a tipos usando el comando... `npm i @types/lodash --save-dev`
- Teniendo en cuenta esta instrucción `const rta = 1 + '1';` ¿Cuál sería el tipo de dato que infiere TS de rta?: string
- Si se define esta variable  let myProductPrice = 100; ¿Cuál es el tipo que infiere TS?: number
- ¿Cuál sería la forma correcta de definir una variable que solo soporte números y strings?: `let myVar: number|string`
- ¿Cuál es la manera correcta de crear un propio tipo para definir los atributos de un Producto?: `type Product = {}`
- ¿Cuál es comando con el cual pueda habilitar el análisis de código de TypeScript en un archivo JavaScript?: `@ts-check`

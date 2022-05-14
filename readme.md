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

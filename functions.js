// Functions
/* 

function funcName(params?){
    return?
}

const funcName = function(params?){
    return?
}


const funcName = () => valor

*/

function saludo(){
    return "Hola Mundo"     
}

saludo()

const saludar = (name) => `Hola ${name}`

saludar("Luis")


function sumar(a, b){
    return a + b
}

sumar(10, 10)


function restar(a, b = 10){
    return a - b
}

restar(10)

restar(10, 5)

function multiplicar(a, b){
    return a * b
}

console.log(multiplicar(b=5, a = 4))

function calculo(...rest){
    console.log(rest)
}

calculo(1, 2, 3, 4)

function informacion(...rest){
    console.log(rest)
}

informacion(nombre="john", apellido="doe")


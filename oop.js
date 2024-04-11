class Persona {
    nombre = "";
    apellido = "";
    edad = ""

    saludar = function(){
        console.log("Hola Soy una Persona")
    }
    hablar = function(){}
    caminar = function(){}
    correr = function(){}

}


class Estudiante extends Persona {
    saludar = function(){
        console.log("Soy un Estudiante")
    }
}


let persona1 = new Persona()
persona1.nombre = "Jane"
persona1.saludar()

let persona2 = new Persona()
persona2.nombre = "John"
persona2.saludar()

let estudiante1 = new Estudiante()
estudiante1.saludar()
estudiante1.nombre = "Luis"
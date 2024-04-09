// Loops
/* 

for(init; condition; increment){

}

for (indice in collection){

}

for(value of collection){

}

while(condition){

}

do {

} while (condition)

*/

for(let i = 1; i <= 10; i++){
    console.log(i)
}


let nombres = ["Hugo", "Paco", "Luis"]

for(let i = 0; i < nombres.length; i++){
    console.log(nombres[i])
}

for(let indice in nombres){
    console.log(nombres[indice])
}

for(let nombre of nombres){
    console.log(nombre)
}

let i = 0;
while (i < nombres.length){
    console.log(nombres[i])
    i++
}
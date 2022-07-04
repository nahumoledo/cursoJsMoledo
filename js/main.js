let montoCompras = 0
let producto = prompt("Que va a comprar?").toLowerCase()
function sumarGastos(numero1, numero2){
   montoCompras = numero1 + numero2
   alert("El total es de " + montoCompras)
}

if (producto == "remera") {
    sumarGastos(0, 2000)

}
else if (producto == "jeans") {
    sumarGastos(0, 4000)

}
else if (producto == "buzo") {
    sumarGastos(0, 5000)
}
else {
    alert("El producto no se encuentra disponible")
}
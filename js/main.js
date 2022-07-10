class Producto {
    constructor(nombre, precio){
        this.nombre = nombre.toLowerCase()
        this.precio = parseFloat(precio)
    }
    sumarIva(){
        this.precio = this.precio * 1.21
    }
}
const productos = []
productos.push(new Producto("remera", "2000"))
productos.push(new Producto("jeans", "4000"))
productos.push(new Producto("buzo", "5000"))
for (const producto of productos)
    producto.sumarIva()
let montoCompras = 0
let producto = prompt("Que va a comprar?").toLowerCase()
function sumarGastos(numero1, numero2){
   montoCompras = numero1 + numero2
   alert("El total es de " + montoCompras)
}
let ropa = productos.find (prod => prod.nombre == producto).precio

if (producto == "remera") {
    sumarGastos(0, ropa)

}
else if (producto == "jeans") {
    sumarGastos(0, ropa)

}
else if (producto == "buzo") {
    sumarGastos(0, ropa)
}
else {
    alert("El producto no se encuentra disponible")
}
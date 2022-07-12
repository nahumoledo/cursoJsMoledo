let nombre = prompt("¿Cómo te llamas?")

alert(`Hola ${nombre}, bienvenido a Zion`)

let total = 0
let pagoCuenta = 0
let ropaComprada = []
let cantidad = 0

let ropa = [
    {
        id: 1,
        nombre: "remera",
        precio: 2000,
    },
    {
        id: 2,
        nombre: "jeans",
        precio: 4000,
    },
    {
        id: 3,
        nombre: "buzo",
        precio: 5000,
    }

]

function pedirRopa(){

    let prenda = prompt("¿Qué desea comprar: 1, 2 o 3 (1- remera / 2- jeans / 3- buzo) ?")

        let pagar = ropa.find(ropa => ropa.id == prenda).precio

        let ropaSelect = ropa.find(ropa => ropa.id == prenda).nombre

        if (ropaComprada.find(ropa => ropa.nombre == ropaSelect)) {
            ropaComprada.find(ropa => ropa.id == prenda).qty
        total += pagar
        alert(`Compraste ${ropaSelect} el precio es de ${pagar} y tenes un acumulado de ${total}`)
        clienteSale()
        } else {
            alert("No tenemos esa prenda")
            clienteSale()
        }
}

function clienteSale() {
    let salir = prompt("¿Quieres irte de Zion? (si/no)")
    if (salir == "si") {
        pagarCuenta()
    } else {
        pedirRopa()
    }
}

function pagarCuenta() {
    alert(`Tu total es de ${total}`)

    do {
        pagoCuenta = prompt("¿Cuánto vas a pagar?")
        if (pagoCuenta >= total) {
            alert(`Gracias por tu visita a Zion, tu cambio es de ${pagoCuenta - total}, esperamos verte pronto! Saludos ${nombre}`)
        } else {
            alert("No tienes suficiente dinero, revisa bien tus bolsillos")
        }
    } while (pagoCuenta < total)
}

pedirRopa()
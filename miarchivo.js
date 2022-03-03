class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
}

const productos = [];

productos.push(new Producto("Air Jordan by Supreme", "75000"));
console.log("El valor del producto seleccionado es: " + JSON.stringify(productos))
productos.push(new Producto("Nike Dunk High by Supreme", "68000"));
console.log("El valor del producto seleccionado es: " + JSON.stringify(productos))
productos.push(new Producto("Nike Dunk Low by Supreme", "65000"));
console.log("El valor del producto seleccionado es: " + JSON.stringify(productos))


for (const producto of productos) {

    producto.sumaIva();
    console.log("El precio final de " + producto.nombre + " es $" + producto.precio)
}
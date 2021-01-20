var gastoPersona= Number (prompt("¿Cuanto dinero quiere gastar"))
var carrito = 0;

function remera (precioRemera) {
  
  var resultado = precioRemera ;
  carrito = carrito + resultado;
  document.getElementById ("carrito").innerHTML = `<b>${carrito}</b>`
  return carrito
  
}

function buzo (precioBuzo) {

var resultado = precioBuzo;
carrito = carrito + resultado;
document.getElementById ("carrito").innerHTML = `<b>${carrito}</b>`
return carrito

}

function zapatillas (precioZapatillas) {
  
  var resultado = precioZapatillas;
  carrito = carrito + resultado;
  document.getElementById ("carrito").innerHTML = `<b>${carrito}</b>`
  return carrito
}

function gorra (precioGorra) {

var resultado = precioGorra;
carrito = carrito + resultado;
document.getElementById ("carrito").innerHTML = `<b>${carrito}</b>`;
return carrito

}

function compra (minima) {

if (gastoPersona<= minima) {alert ("La compra minima es de $3000")}

else if (gastoPersona>minima) {alert ("Muchas gracias por elegirnos!")}


}

compra(3000);


class Remera {

  constructor (nombreProducto, marcaProducto, precioProducto) {
    this.producto = nombreProducto;
    this.marca = marcaProducto;
    this.precio = precioProducto;
  } 

  mostrarProductosEnPantalla() {
    document.getElementById("botonRemera").innerHTML = `
    <div>
      <h2>${this.producto}</h2>
      <p>${this.marca}</p>
      <p>${this.precio}</p>

    </div>
    `;
    
  }

  
}

let verRemera = new Remera ("Remera", "Adidas", 400)


class Buzo {

  constructor (nombreProducto, marcaProducto, precioProducto) {
    this.producto = nombreProducto;
    this.marca = marcaProducto;
    this.precio = precioProducto;
  } 

  mostrarProductosEnPantalla() {
    document.getElementById("botonBuzo").innerHTML = `
    <div>
      <h2>${this.producto}</h2>
      <p>${this.marca}</p>
      <p>${this.precio}</p>

    </div>
    `;
    
  }

  

}


let verBuzo = new Buzo ("Buzo", "Cool Haas", 600)


class Zapatillas {

  constructor (nombreProducto, marcaProducto, precioProducto) {
    this.producto = nombreProducto;
    this.marca = marcaProducto;
    this.precio = precioProducto;
  } 

  mostrarProductosEnPantalla() {
    document.getElementById("botonZapatillas").innerHTML = `
    <div>
      <h2>${this.producto}</h2>
      <p>${this.marca}</p>
      <p>${this.precio}</p>

    </div>
    `;
    
  }

}


let verZapatillas = new Zapatillas ("Zapatillas", "Nike", 1000)


class Gorra {

  constructor (nombreProducto, marcaProducto, precioProducto) {
    this.producto = nombreProducto;
    this.marca = marcaProducto;
    this.precio = precioProducto;
  } 

  mostrarProductosEnPantalla() {
    document.getElementById("botonGorra").innerHTML = `
    <div>
      <h2>${this.producto}</h2>
      <p>${this.marca}</p>
      <p>${this.precio}</p>

    </div>
    `;
    
  }

}


let verGorra = new Gorra ("Gorra", "DC", 200)


function mostrarRemera() {
  let verRemera = new Remera ("Remera", "Marca: Adidas", "Precio: $" + 400);
  verRemera.mostrarProductosEnPantalla();
}

function mostrarBuzo () {
  let verBuzo = new Buzo ("Buzo", "Marca: Cool Haas","Precio: $" + 600);
 verBuzo.mostrarProductosEnPantalla();
}

function mostrarZapatillas () {

  let verZapatillas = new Zapatillas ("Zapatillas", "Marca: Nike","Precio: $" + 1000);
  verZapatillas.mostrarProductosEnPantalla();

}

function mostrarGorra () {
let verGorra = new Gorra ("Gorra", "Marca: DC","Precio: $" + 200);
verGorra.mostrarProductosEnPantalla();
}


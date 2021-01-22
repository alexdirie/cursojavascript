
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

function pantalon (precioPantalon) {
  
  var resultado = precioPantalon;
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



class Producto {

  constructor (nombreProducto, marcaProducto, stockProducto, precioProducto,imagenProducto) {
    this.producto = nombreProducto;
    this.marca = marcaProducto;
    this.stock = stockProducto;
    this.precio = precioProducto;
    this.imagen = imagenProducto;
  } 

}

let verRemera = new Producto ("Remera", "Adidas",20, 400,"https://th.bing.com/th/id/OIP.HWNyVVyIbhlaNIJSGVSAawAAAA?w=192&h=278&c=7&o=5&pid=1.7")
let verBuzo = new Producto ("Buzo", "Cool Haas",8, 600,"https://th.bing.com/th/id/OIP.uxuPpmq8OocjW7rcJQ20IAHaHa?w=200&h=200&c=7&o=5&pid=1.7")
let verPantalon = new Producto ("Pantalon", "Nike",5, 1000,"https://th.bing.com/th/id/OIP.EFpqjTBAE60TYe77bzjMHAHaJQ?w=192&h=240&c=7&o=5&pid=1.7")
let verGorra = new Producto ("Gorra", "DC",12, 200,"https://th.bing.com/th/id/OIP.WMdUe8bGVRaC5qX8592vFQEdEs?w=188&h=198&c=7&o=5&pid=1.7")



let baseDeDatos = [];

baseDeDatos.push(verRemera, verBuzo, verPantalon, verGorra);

let aux = ``;
for (let i = 0; i < baseDeDatos.length; i++) {
  if (baseDeDatos[i].stock > 0) {
    aux += ` <div class="cartas">
        <div class="col-lg-8 col-md-6 mb-4">
        <div class="card h-100">
        <a href="#"><img class="card-img-top" src="${baseDeDatos[i].imagen}" alt=""></a>
        <div class="card-body">
        <h4 class="card-title">
        ${baseDeDatos[i].producto}
        </h4>
        <h4 class="card-title">
        ${baseDeDatos[i].marca}
        </h4>
        <h5>$${baseDeDatos[i].precio}</h5>
        </div>
        <div class="card-footer">
        <button onclick="agregarAlCarrito()">Comprar</button>
        </div>
        </div>
        </div>
        </div>
        `;
  }else{
      aux += `
      <h2>No tenemos stock</h2>`
  }
}

document.getElementById("productos").innerHTML = aux;


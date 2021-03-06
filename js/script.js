let carrito = [];
let baseDeDatos = [];

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
        <button class="btn btn-primary" style="width:100%" 
    onclick='agregarAlCarrito(${JSON.stringify(
      baseDeDatos[i]
    )})'>Agregar al carrito</button>
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


function agregarAlCarrito(producto) {
  carrito.push(producto);
  console.log(carrito);
  localStorage.setItem("carrito", JSON.stringify(carrito));
   let aux = 0;
   for (let i = 0; i < carrito.length; i++) {
     aux += carrito[i].precio;
   }
   document.getElementById("precio-total").innerHTML = "$" + aux; 
}

if (localStorage.getItem("carrito") != null) {
  let valoresDelCarrito = JSON.parse(localStorage.getItem("carrito"));
  carrito = valoresDelCarrito;
}


function obtenerDatos(){
  nombreCliente = document.getElementById("nombreCliente").value;
  apellidoCliente = document.getElementById("apellidoCliente").value; 
     var nombreCompleto = [nombreCliente + " " + apellidoCliente];
     return nombreCompleto; }

var input = document.getElementsByTagName ("input")


for (i=0; i<input.length; i++) {
  input[i].addEventListener("change", resultadoNombre)  
 };

 function resultadoNombre (){
  resultado = obtenerDatos();
  console.log(resultado);
 };

 let aux1 = ``
 function comprar () {
  
  for(let i = 0; i < carrito.length; i++){
    aux1 += ` <div class="cartasCarrito">
        <div class="col-lg-8 col-md-6 mb-4">
        <div class="card h-100">
        <a href="#"><img class="card-img-top" src="${carrito[i].imagen}" alt=""></a>
        <div class="card-body">
        <h4 class="card-title">
        ${carrito[i].producto}
        </h4>
        <h4 class="card-title">
        ${carrito[i].marca}
        </h4>
        <h5>$${carrito[i].precio}</h5>
        </div>
        <div class="card-footer">
        </div>
        </div>
        </div>
        </div>
        `;
  }
  document.getElementById("carrito").innerHTML = aux1 
 }

 //APLICANDO jQuery//
 
 $("h1").hover( function () {
	$ ( this ).css("color" , "red");
},
  function () {
    $(this).css("color", "blue");
	});

  $(".jumbotron").click( 
    function () {
      $(this).css("background-color", "gray");
    });

    $("button").click( function () {
      $ ( this ).css("background-color" , "black");
    });

    $("input").hover( function () {
      $ ( this ).css("background-color" , "lightblue");
    },
    function () {
      $(this).css("background-color", "white");
    });

    $("#precio-total").hover( function () {
      $ ( this ).css("background-color" , "lightblue");
    },
    function () {
      $(this).css("background-color", "white");
    });

    let carritoColor = $('#precio-total');
    carritoColor.css('color', 'red');

    $('#nombreCliente').on ('keypress', function (e) {
     if (e.which == 13) {
      alert ('Ahora llene su apellido');
     }
    });

    $('#apellidoCliente').on ('keypress', function (e) {
      if (e.which == 13) {
       alert ('Muchas gracias por completar sus datos');
      }
     });


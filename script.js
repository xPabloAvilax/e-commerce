class Producto{
    codigo=0;
    titulo = "";
    precio = 0;
    stock = 0;
    cantidadSeleccionada = 0;
    
    function obtenerCodigo(){
        return this.titulo;
    }
    function obtenerTitulo(){
        return this.titulo;
    }
    function obtenerPrecio(){
        return  this.precio;
    }
    function obtenerStock(){
        return  this.precio;
    }
    function obtenerCantidadSeleccionada(){
        return  this.cantidadSeleccionada;
    }
    function modificarCodigo(){
        return this.titulo;
    }
    function modificarTitulo(){
        return this.titulo;
    }
    function modificarPrecio(){
        return  this.precio;
    }
    function modificarStock(){
        return  this.precio;
    }
    function modificarCantidadSeleccionada(){
        return  this.cantidadSeleccionada;
    }
    function agregarUnidad(){
        this.cantidadSeleccionada++;
    }
    function restarUnidad(){
        this.cantidadSeleccionada--;
    }
 
}
class Carrito{
    productos[];
    usuario=0;
    fecha="";
    hora="";
}
class Usuario{
    nombre="";
    apellido="";
    usuario="";
    contrasena="";
    email="";
    direccion="";
    direccion="";
}
function agregarProducto(codigo_producto){
    carrito[carrito.find(producto => producto.codigo === codigo_producto)].agregarUnidad();
}
function restarProducto(codigo_producto){
    carrito[carrito.find(producto => producto.codigo === codigo_producto)].restarUnidad();
}
function finalizarCompra(carrito){
    carrito.fecha = D
}

var Carrito = new Carrito();

let botonesSuma = document.getElementsByClassName("btn-add");

suma.array.forEach(element => {
    element.addEventListener("click",agregarProducto(element.codigo_producto));
});
let botonesResta = document.getElementsByClassName("btn-remove");
suma.array.forEach(element => {
    element.addEventListener("click",restarProducto(element.codigo_producto));
});

let botonComprar = document.getElementById("btn-purchase");
botonComprar = document.addEventListener("click",finalizarCompra());



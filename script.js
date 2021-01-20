class Producto{
    codigo=0;
    titulo = "";
    precio = 0;
    stock = 0;
    cantidadSeleccionada = 0;
    
    obtenerCodigo(){
        return this.titulo;
    }
    obtenerTitulo(){
        return this.titulo;
    }
    obtenerPrecio(){
        return  this.precio;
    }
    obtenerStock(){
        return  this.precio;
    }
    obtenerCantidadSeleccionada(){
        return  this.cantidadSeleccionada;
    }
    modificarCodigo(){
        return this.titulo;
    }
    modificarTitulo(){
        return this.titulo;
    }
    modificarPrecio(){
        return  this.precio;
    }
    modificarStock(){
        return  this.precio;
    }
    modificarCantidadSeleccionada(){
        return  this.cantidadSeleccionada;
    }
    agregarUnidad(){
        this.cantidadSeleccionada++;
    }
    restarUnidad(){
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



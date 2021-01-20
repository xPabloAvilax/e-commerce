class Producto{
    codigo=0;
    titulo = "";
    precio = 0;
    stock = 0;
    cantidadSeleccionada = 0;
    function validarStock(){

    }
    
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
    function agregarProducto(carrito, codigo_producto){

    }

}

class Carrito{
    productos[];
    usuario=0;
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
let Carrito = new Carrito();

let botonesSuma = document.getElementsByClassName("btn-add");
suma.array.forEach(element => {
    element.addEventListener("click",agregarProducto(element.codigo_producto));
});
let botonesResta = document.getElementsByClassName("btn-remove");
suma.array.forEach(element => {
    element.addEventListener("click",restarProducto(element.codigo_producto));
});


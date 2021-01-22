class Producto{
    codigo=0;
    titulo = "";
    precio = 0;
    stock = 0;
    cantidadSeleccionada = 0;
    constructor(codigo,cantidadSeleccionada){
        this.codigo = codigo;
        this.cantidadSeleccionada=cantidadSeleccionada;
    }   
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
    productos=[];
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
    if (typeof carritoCompra.productos.find(producto => producto.codigo == codigo_producto) === 'undefined'){
        let nuevoProducto = new Producto(codigo_producto,1);
        carritoCompra.productos.push(nuevoProducto);
        alert("Producto nuevo agregado");
    }else{
        carritoCompra.productos.find(producto => producto.codigo == codigo_producto).agregarUnidad();
        alert("Cantidad agregada");  
    }
}
function removerProducto(codigo_producto){
    if (typeof carritoCompra.productos.find(producto => producto.codigo == codigo_producto) === 'undefined'){
        alert("No se puede remover producto por no estar en el carrito.");
    }else{
        carritoCompra.productos.find(producto => producto.codigo == codigo_producto).restarUnidad();
        alert("Cantidad restada");  
    }
}
/*
function finalizarCompra(carrito){
    
}*/

var carritoCompra = new Carrito();
let botonesSuma = document.getElementsByClassName("btn-add");
Array.from(botonesSuma).forEach((boton)=>boton.addEventListener("click",agregarProducto(boton.getAttribute("codigo_producto"))));
console.log(carritoCompra);
let botonesResta = document.getElementsByClassName("btn-remove");
Array.from(botonesResta).forEach((boton)=>boton.addEventListener("click",removerProducto(boton.getAttribute("codigo_producto"))));
console.log(carritoCompra);

/*let botonComprar = document.getElementById("btn-purchase");
botonComprar = document.addEventListener("click",finalizarCompra());*/



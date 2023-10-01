var botonNavegador = document.getElementById("boton1");
var botonDesarrollo = document.getElementById("boton2");

function paginaNavegador () {
    window.location.href = "nav.html";
}
function paginaDesarrollo () {
    window.location.href = "desarrollo.html";
}
botonNavegador.addEventListener("click", paginaNavegador);
botonDesarrollo.addEventListener("click", paginaDesarrollo);
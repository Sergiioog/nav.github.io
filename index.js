var botonNavegador = document.getElementById("boton1");
var botonDesarrollo = document.getElementById("boton2"); //VARIABLES QUE SEÑALAN A LOS BOTONES DE "SABER MAS"

function paginaNavegador () {
    window.location.href = "nav.html"; //FUNCIONES DE CAMBIO DE PÁGINA
}
function paginaDesarrollo () {
    window.location.href = "desarrollo.html";
}
botonNavegador.addEventListener("click", paginaNavegador); //EVENTOS PARA CUÁNDO SE HAGA CLICK
botonDesarrollo.addEventListener("click", paginaDesarrollo);
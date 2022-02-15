const ver = document.querySelector(".enviar__enlace");
const nover=document.querySelector(".enviar__correo")

cargarEventListeners();

function cargarEventListeners(){

    ver.addEventListener("click", agregarshow);
    nover.addEventListener("click", quitarshow);
}

function agregarshow(){
    document.getElementById("container").classList.add("show");
    document.getElementById("container2").classList.remove("show");
    document.getElementById("ponerbarra").classList.add("barra");
    document.getElementById("quitarbarra").classList.remove("barra");
}

function quitarshow(){
    document.getElementById("container").classList.remove("show");
    document.getElementById("container2").classList.add("show");
    document.getElementById("ponerbarra").classList.remove("barra");
    document.getElementById("quitarbarra").classList.add("barra");
    
}
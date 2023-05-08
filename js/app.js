const agregar = document.querySelector('.BtnAgregar');
const form = document.querySelector('.form');
const listaEventos = document.querySelector('.mostrarEventos');
let cant = [];

cargarEventos();
function cargarEventos(){
    form.addEventListener('submit', AgregarEnvento);
    listaEventos.addEventListener('click', mostrar);

}


function AgregarEnvento(e){
   e.preventDefault();
   const infoEvento = {
    nombre: form.querySelector('#nombre').value,
    fecha: form.querySelector('#fecha').value,
    hora: form.querySelector('#hora').value,
   }
   cant = [...cant, infoEvento];
}
//creando el objeto para guardar los eventos 
function  mostrar(){
    cant.forEach( e => {
        console.table(e);
    })
}
mostrar();
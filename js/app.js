const agregar = document.querySelector('.BtnAgregar');
const form = document.querySelector('.form');
const listaEventos = document.querySelector('.mostrarEventos');
const listaEventos2 = document.querySelector('#listaEventos tbody');
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
   form.reset();
  

   cant.forEach( e  => {
    const row  = document.createElement('tr');
    row.innerHTML=`
        
        <td> 
            ${infoEvento.nombre}
        </td>
        <td> 
            ${infoEvento.fecha}
        </td>
        <td> 
        ${infoEvento.hora}
        </td>`
    
        listaEventos2.appendChild(row);
   })

}


//creando el objeto para guardar los eventos 
function  mostrar(){
    cant.forEach( e => {
        console.table(e);
    })
}




function  limpiarHtml() {
    //forma lenta 
    listaEventos2.innerHTML = '';

    //forma rapida 
    
}
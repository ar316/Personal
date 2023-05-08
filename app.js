const agregar = document.querySelector('.BtnAgregar');
const Evento = document.querySelector('.form');


Evento.addEventListener('submit', e => {
    
        e.preventDefault();
        const data = Object.fromEntries(
            new FormData(e.target)
        )
            
        alert(JSON.stringify(data));
        
});

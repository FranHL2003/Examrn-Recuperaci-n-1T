// Obtener los elementos HTML necesarios
const tabla = document.getElementById('tabla-recursos');
const btnModal = document.getElementById('btn-modal');
const modal = document.getElementById('modal');
const closeModal = document.querySelector('.close');

const cuerpoTabla = document.querySelector('tbody');
const template = document.querySelector('template');
const ventana = document.querySelector('.ventana');

// Función para mostrar el modal
function mostrarModal() {
  modal.classList.remove("off");
  modal.classList.add("on");
  ventana.classList.remove("on");
  ventana.classList.add("off");
  
}

// Función para ocultar el modal
function ocultarModal() {
    modal.classList.remove("on");
    modal.classList.add("off")
    ventana.classList.add("on");
    ventana.classList.remove("off");
}

// Asignar eventos a los elementos
btnModal.addEventListener('click', mostrarModal);
closeModal.addEventListener('click', ocultarModal);
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    ocultarModal();
  }
});


function añadirTabla() {
    let nuevo = template.content.cloneNode(true);
    nuevo.querySelector('.X').textContent = document.querySelector('#x').value;
    nuevo.querySelector('.Y').textContent = document.querySelector('#y').value;
    nuevo.querySelector('.Nombre').textContent = document.querySelector('#nombre').value;
    nuevo.querySelector('.Direccion').textContent = document.querySelector('#direccion').value;
    nuevo.querySelector('.Horario').textContent = document.querySelector('#horario').value;
    nuevo.querySelector('.Telefono').textContent = document.querySelector('#telefono').value;
    cuerpoTabla.appendChild(nuevo);
    document.querySelector("#x").value = "";
    document.querySelector("#y").value = "";
    document.querySelector("#nombre").value = "";
    document.querySelector("#direccion").value = "";
    document.querySelector("#horario").value = "";
    document.querySelector("#telefono").value = "";
    ocultarModal();
  }

  function enviar(ev){
    ev.preventDefault();
    console.log('enviar');
  }
  
  document.querySelector('form').addEventListener('submit', enviar);
  document.querySelector('form').addEventListener('submit', añadirTabla);


  
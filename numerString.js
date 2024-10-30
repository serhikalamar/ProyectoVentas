function imprimirEventos() {
   const contenedorEventos = document.querySelector('body');

   document.querySelectorAll('.evento').forEach(evento => evento.remove());

   for (let i = 0; i < eventos.length; i++) {
       const evento = eventos[i];

       const divEvento = document.createElement('div');
       divEvento.className = 'evento';

       divEvento.innerHTML = `
           <div class="evento-fecha">
               <p class="fecha dia">${new Date(evento.fecha).getDate()}</p>
               <p class="fecha mes">${new Date(evento.fecha).toLocaleString('en', { weekday: 'long' })}</p>
           </div>
           <div class="evento-info">
               <h1>${evento.nombre}</h1>
               <p class="evento-descripcion">${evento.descripcion}</p>
               <p class="fecha hora">${evento.hora}</p>
           </div>
           <img src="/ProyectoSalaVentas/03_Print_A3_Halloween_Deathlight.jpg" alt="Imagen del evento" class="evento-imagen">
           <button class="evento-boton">Mas Info</button>
       `;

       contenedorEventos.appendChild(divEvento);
   }
}

document.querySelector('.CreacionInformacion button').addEventListener('click', crearEvento);

const eventos = [];

function crearEvento() {
    const nombre = document.querySelector('input[placeholder="Nombre del evento"]').value;
    const fecha = document.querySelector('input[type="date"]').value;
    const capacidad = document.querySelector('input[placeholder="Capacidad"]').value;
    const campo1 = document.querySelectorAll('input')[3].value;
    const campo2 = document.querySelectorAll('input')[4].value;
    const campo3 = document.querySelectorAll('input')[5].value;


    
    const nuevoEvento = { nombre, fecha, capacidad, descripcion: campo1, hora: campo2, otroCampo: campo3 };

    eventos.push(nuevoEvento);

    imprimirEventos();
    typeof(campo1);
}

document.querySelector('.CreacionInformacion button').addEventListener('click', crearEvento);

const evento = document.getElementById('evento');


document.addEventListener("DOMContentLoaded", function() {
  const botonSticky = document.querySelector(".boton-sticky");
  const formulario = document.querySelector(".CreacionInformacion");

   botonSticky.addEventListener("click", () => {
      formulario.classList.toggle("visible");
   });
});







//parte DATE

const fecha = new Date(Date.now());
//const fechaFormateada = fecha.toLocaleString();
//const [dias, horas] = calculoDias();


function calculoHoras(fechaConcierto){
    return Math.ceil((fechaConcierto.getTime() - fecha.getTime())
    /(1000 * 60 * 60));
}
function calculoDias(fechaConcierto){
    const totalHoras = calculoHoras(fechaConcierto);
    const dias = parseInt(totalHoras / 24);
    const horas = totalHoras % 24;
    return [dias, horas];
}
function determinarTemporada(fecha){
    const temporada = ["Invierno", "Primavera", "Verano", "Otoño"];
    const mes = fecha.getMonth();
    let index = parseInt(mes / 3);
    if(fecha.getMonth() % 3 === 2 && fecha.getDate() >= 25){
        index++;
    }
    if(index >= 4){
        index = 0;
    }
    return temporada[index];
}
function programarRecordatorio(diasAntes){
    if(dias < diasAntes){
        console.log(dias < 0 ?  "No puedes poner una fecha anterior"
            : "Queda" + (dias === 1  ? " " +  dias + " dia" :
                dias > 1 ? "n " + dias + " días" :
                    dias === 0 && horas > 1 ? "n" : "") +
            (dias > 0 ? " y" : "") +
            (horas === 1 ? " " + +horas + " hora" :
                horas > 1 ? " " + horas + " horas" : ""))
        console.log("El concierto es el " + fechaConciertoFormateada + " en la estación de " + determinarTemporada(fechaConcierto))
    }
}
programarRecordatorio(54)
/*setInterval(function(){
    fecha = new Date(Date.now())
    fechaFormateada = fecha.toLocaleString()
        [dias, horas] = timestamp(fechaConcierto)
    console.log(dias < 0 ?  "No puedes poner una fecha anterior" : "Queda" + (dias === 1  ? " " +  dias + " dia" :
            dias > 1 ? "n " + dias + " días" :
                dias === 0 && horas > 1 ? "n" : "") +
        (dias > 0 ? " y " : "") +
        ( horas === 1 ? " " + + horas + " hora" :
            horas > 1 ? " " + horas + " horas" : ""))

}, 1000 * 60 * 60 * 24)
*/
/*function timestamp(fecha_concierto){
    const dias = Math.ceil((fecha_concierto.getTime() - fecha.getTime())
        / (1000 * 60 * 60 * 24))
    const horas = Math.abs(fecha_concierto.getHours() - fecha.getHours())
    return [dias, horas];
}*/


function calcularPrecioEntrada() {
   const precioBase = 30.25;
   let precioFinal = 0;


   let tipoEntrada = document.getElementById("tipoEntrada").value;
   let numPerson = parseInt(document.getElementById("personas").value);


   if (isNaN(numPerson) || numPerson <= 0) {
       document.getElementById("resultado").innerHTML = "Introduce un número válido de personas";
       return;
   }


   switch (tipoEntrada) {
       case "general":
           precioFinal = precioBase * numPerson;
           break;
       case "infantil":
           precioFinal = (precioBase - precioBase * 0.25) * numPerson;
           break;
       case "pmr":
           precioFinal = (precioBase - precioBase * 0.25) * numPerson;
           break;
       case "carneJoven":
           precioFinal = (precioBase - precioBase * 0.25) * numPerson;
           break;
       case "+65anos":
           precioFinal = (precioBase - precioBase * 0.25) * numPerson;
           break;
       case "packFamiliar3":
           precioFinal = (precioBase - precioBase * 0.35) * numPerson;
           break;
       case "packFamiliar4":
           precioFinal = (precioBase - precioBase * 0.35) * numPerson;
           break;
       case "pack10":
           precioFinal = (precioBase - precioBase * 0.21) * numPerson;
           break;
       case "club":
           precioFinal = (precioBase - precioBase * 0.20) * numPerson;
           break;
   }


  //Con Math.round, redondeamos al valor entero más cercano
   precioFinal = Math.round(precioFinal);


   document.getElementById("resultado").innerHTML = "El precio de la entrada es: " + precioFinal.toFixed(2) + "€";
}

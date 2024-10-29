const componenteEvento = (eventos[]) => {
   eventos[] = evento[];




}
const CreacionComponenteEvento = () => {


}

const eventos = [];
const evento1 = {};
evento1.fecha = new Date(2024, 9, 25);
evento1.fecha.setHours(21, 0, 0);
evento1.banda = 'Barricada';
evento1.aforomax = 1000;
evento1.entradas = [];


for(let i = 0; i<500; i++){
   const entrada = {};
   entrada.tipoDeEntrada = 1;
   precio = 50;
   nombre = '';
   accedido = false;
   evento1.entradas.push(entrada);
}


for(let i = 0; i<300; i++){
   const entrada = {};
   entrada.tipoDeEntrada = 2;
   precio = 75;
   nombre = '';
   accedido = false;
   evento1.entradas.push(entrada);


}


for(let i = 0; i<150; i++){
   const entrada = {};
   entrada.tipoDeEntrada = 3;
   precio = 100;
   nombre = '';
   accedido = false;
   evento1.entradas.push(entrada);


}


for(let i = 0; i<50; i++){
   const entrada = {};
   entrada.tipoDeEntrada = 4;
   precio = 250;
   nombre = '';
   accedido = false;
   evento1.entradas.push(entrada);


}


eventos.push(evento1);


const evento = document.getElementById('evento');



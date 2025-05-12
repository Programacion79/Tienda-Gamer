//variables del arreglo
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');
//Variables
const resultado = document.querySelector('#resultado');
const max = new Date().getFullYear();
const min = max-10;

const datosBusqueda = {
    marca:'',
    year:'',
    minimo:'',
    maximo:'',
    puertas:'',
    transmision:'',
    color:''
}
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos);

    // llena las opciones de años
    llenarSelect();
});
function llenarSelect(){
    for(let i = max; i >= min; i--){
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion);
    }
}
function mostrarAutos(autos)
{
  limpiarHTML();//limpia el appendchild cada se refresca
   autos.forEach(auto => {
        const {marca,modelo,year,precio,puertas,color,transmision} = auto;
        const autoHTML = document.createElement('P');
        autoHTML.textContent = `
            ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmisión: ${transmision}
             - Color: ${color} - Precio ${precio} USD
        `;
        //insertar en el html
        resultado.appendChild(autoHTML);
   });
}
function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}

function filtrarAuto(){
    //funcion de alto nivel
    const resultado = autos.filter(filtrarMarca).filter(filtraryear);
    mostrarAutos(resultado);
}
function filtrarMarca(auto){
    if(datosBusqueda.marca){
        return auto.marca === datosBusqueda.marca;
    }else{
        return auto;
    }
    
}
function filtraryear(auto){
    if(datosBusqueda.year){
        return auto.year === datosBusqueda.year;
    }else{
        return auto;
    }
    
}
marca.addEventListener('change',e =>{
 datosBusqueda.marca = e.target.value;
 filtrarAuto();
});
year.addEventListener('change',e =>{
    datosBusqueda.year = parseInt(e.target.value);
    filtrarAuto();
});
minimo.addEventListener('change',e =>{
    datosBusqueda.minimo = e.target.value;
});
maximo.addEventListener('change',e =>{
    datosBusqueda.maximo = e.target.value;
});
puertas.addEventListener('change',e =>{
    datosBusqueda.puertas = e.target.value;
});
transmision.addEventListener('change',e =>{
    datosBusqueda.transmision = e.target.value;
});
color.addEventListener('change',e =>{
    datosBusqueda.color = e.target.value;
});



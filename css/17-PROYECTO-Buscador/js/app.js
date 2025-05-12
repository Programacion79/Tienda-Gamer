// VARIABLES DEL ARREGLO
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo' );
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const trasmision = document.querySelector('#trasmision');
const color = document.querySelector('#color ');

//VARIABLES
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
document.addEventListener('DOMContentLoader', () =>{
    mostrarAutos();

    // LLENA LAS OPCIONES DE AÑOS
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
function mostrarAutos(){
    autos.forEach(auto => {
        const {marca,modelo,year,puertas,color,trasmision} = auto;
        const autoHTML = document.createElement('p');
        autoHTML.textContent = `
        ${marca} ${modelo} - ${year} - ${puertas} - puertas - Trasmisión:${trasmision}
        - Color: ${color} - Precio ${precio} USD
        `;

        //INSERTAR EN EL HTML
        resultado.appendChild(autoHTML);
    });
}
function filtrarAuto(){
    const resultado = autos.filter(filtrarMarca);
}
function filtrarMarca(AUTO){
    if(UserActivation.marca===datosBusqueda.carca){
        console.log(auto);
    }
}

marca.addEventListener('Change',e =>{
    datosBusqueda.marca = e.target.value;
});
year.addEventListener('change',e =>{
    datosBusqueda.year = e.target.value;
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
trasmision.addEventListener('change',e =>{
    datosBusqueda.trasmision = e.target.value;
});
color.addEventListener('change',e =>{
    datosBusqueda.trasmisio = e.target.value;
});



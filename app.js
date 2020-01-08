//variables globales
const formulario = document.querySelector('#formulario');
const listActivity = document.getElementById('listaActivity'); 
let arrayActivity = [];
//funciones
const CrearActividad = (activity) =>{
    let item = {
        activity:activity,
        estado  :false
    }
    arrayActivity.push(item);
    return item;
}
const GuardarActivity=()=>{
    localStorage.setItem('rutina',JSON.stringify(arrayActivity) );
    listarDB();
}
const listarDB=()=>{
    listActivity.innerHTML='';
    arrayActivity=JSON.parse(localStorage.getItem('rutina'));
    if(arrayActivity === null){
        arrayActivity=[];
    }else{
        arrayActivity.forEach(element => {
            listActivity.innerHTML +=`<div class="alert alert-danger" role="alert" ><i class="material-icons float-left mr-2">accessibility</i><b>${element.activity}</b> - ${element.estado}<span class="float-right"><i class="material-icons">done</i><i class="material-icons">delete</i></span></div>`;
        });
    }
}
//eventsLstener

formulario.addEventListener('submit',(e)=>{
    e.preventDefault();
    let activity =  document.querySelector('#activity').value;
    CrearActividad(activity);
    GuardarActivity();      
    formulario.reset();
});
document.addEventListener('DOMContentLoaded',listarDB);


listActivity.addEventListener('click', (e) =>{
    e.preventDefault();
   
   //console.log(e.path[0].childNodes[1].innerHTML);
   //console.log(e.target.innerHTML);
console.log(e);

 //  console.log(e.path[0].childNodes[3].innerHTML); 

});
let botonAgregar = document.querySelector(".boton-agregar")
let container = document.querySelector(".container")
let botonEditar = document.querySelector(".boton-editar")
let botonEliminar = document.querySelector(".boton-remover")
let itemImput = document.querySelector(".item-input")
let input = document.querySelector(".input")
let item = document.querySelector(".item")
let inputDiv = document.querySelector(".input-div")
let ul = document.querySelector("ul")
 
//por algun motivo que no entiendo si uso el fontawesome en el scrip no lo toma 

botonAgregar.addEventListener("click", function(e){
e.preventDefault();
let text = input.value;
if (!text){
    alert("Agrega una tarea master")
}else {
let tarea = new items (text)
tarea.crearDiv()
input.value=""
}
})

class items {
    constructor (nuevaTarea){
        this.nuevaTarea = nuevaTarea
    }
    crearDiv (){
    let documentFragment = document.createDocumentFragment();
    let div = document.createElement("DIV");
    let input = document.createElement("input");
    let botonEdi = document.createElement("button");
    let botonEli = document.createElement("button");
    div.classList.add("item"); 
    input.classList.add("item-input");
    input.setAttribute("value", this.nuevaTarea);
    input.disabled = true
    botonEdi.classList.add("boton-editar");
    botonEdi.innerHTML = "Editar";
    botonEli.classList.add("boton-remover");
    botonEli.innerHTML = "X";
    documentFragment.appendChild(div)
    div.appendChild(input)
    div.appendChild(botonEdi)
    div.appendChild(botonEli)
    container.appendChild(documentFragment)

    botonEdi.addEventListener("click",function(){
        if (botonEdi.innerText == "Editar"){
            botonEdi.innerHTML = "Guardar"
            input.disabled = false
            console.log ("cambiar 1")
        }
        else{
            botonEdi.innerHTML = "Editar"
            input.disabled = true
            console.log ("cambiar 2")
        }
        })
    botonEli.addEventListener("click",function(){
        container.removeChild(div)
    })
}
}



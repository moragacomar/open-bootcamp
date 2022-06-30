/*
 * - Replica el ejercicio completo del vídeo
 * - Añade dos párrafos más en cada una de las secciones
 * - Pon un icono de papelera para eliminar párrafos
 *   (Esta imagen puede valer: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSMWeEC0tULzOjfWFAOdOHjUw9WjXhBDbirg&usqp=CAU)
 * - Añade el código necesario para que al arrastrar un fragmento del puzzle a la papelera, éste se elimine 
 */

const parrafos = document.querySelectorAll(".parrafo")
const secciones = document.querySelectorAll(".seccion")

parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", event => {
        console.log("Arrastrando: ", parrafo.innerText)
        parrafo.classList.add("dragging")
        event.dataTransfer.setData("id", parrafo.id)
        const elemento_fantasma = document.querySelector(".imagen-fantasma")
        event.dataTransfer.setDragImage(elemento_fantasma, 0, 0)
    })

    parrafo.addEventListener("dragend", () => {
        parrafo.classList.remove("dragging")
    })
})

secciones.forEach(seccion => {
    seccion.addEventListener("dragover", event => {
        event.preventDefault()
        event.dataTransfer.dropEffect = "copy"
    })

    seccion.addEventListener("drop", event => {
        console.log("Soltando...")
        const id = event.dataTransfer.getData("id")
        const parrafo = document.getElementById(id)
        seccion.appendChild(parrafo)
    })
})

const papelera = document.querySelector(".img-papelera")

papelera.addEventListener("dragover", e => {
    e.preventDefault()
    e.dataTransfer.dropEffect = "copy"
})

papelera.addEventListener("drop", e => {
    const el = e.dataTransfer.getData("id")
    document.getElementById(el).remove()
})
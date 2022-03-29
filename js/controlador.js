import { nombre } from "./GeneradorNombre.js";
import { estatura } from "./GeneradorEstatura.js";
import {universidad} from "./Universidad.js";
import {generartoken} from "./GenerarToken.js";
import {generarURI} from "./GeneradorURI.js"
import {consumirAPI} from "./servicio.js"


let boton=document.getElementById("boton")
boton.addEventListener("click",function(evento){
    evento.preventDefault()
    let frutaSeleccionada=document.getElementById("fruta").value
    let URI=generarURI(frutaSeleccionada)

    async function activarAPI(){
        let token=await generartoken()
        let canciones=await consumirAPI(URI,token)
        console.log(canciones)
    }
    activarAPI()

})
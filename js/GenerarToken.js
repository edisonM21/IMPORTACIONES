export async function generartoken(){
    let URI="https://accounts.spotify.com/api/token"

    let client_id="client_id=b2a10e65a42f41b2b127cca70db0ed3e"
    let client_secret="client_secret=68c5c4194f0849e8af72aa11713324e6"
    let grant_type="grant_type=client_credentials"

    let parametros={
        method:"POST",
        headers:{"Content-Type":"application/x-www-form-urlencoded"},
        body:`${client_id}&${client_secret}&${grant_type}`
    }

    let respuesta = await fetch(URI,parametros)
    let respuestafinal=await respuesta.json()
    let token=(`${respuestafinal.token_type} ${respuestafinal.access_token}`)
    return(token)
    
    
   /* fetch(URI,parametros)
    .then(function(respuesta){
        return(respuesta.json())
    })
    .then(function(respuesta){
        console.log(respuesta)
    })
    .catch(function(respuesta){
        console.log(respuesta)
    })*/
}
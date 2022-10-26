    const botonIr = document.querySelector(".boton");
    let imprimirHTML = document.querySelector('.descripcion');
    let titulo = document.querySelector('.titulo');
    let apiUrl="https://es.wikipedia.org/w/api.php?action=query&list=search&srprop=snippet&format=json&origin=*&utf8=&srsearch=";

    botonIr.addEventListener("click", ()=>{
        const buscador = document.querySelector(".buscardor");
        apiUrls=apiUrl+buscador.value
        console.log(buscador.value)
        asincronia(apiUrls)
        

    })
   
   
   
   
   
    async function asincronia(apiUrls){
        const response = await fetch(apiUrls);
        const respuestaJson = await response.json();
        console.log(respuestaJson)
        


        titulo.innerHTML = `${respuestaJson.query.search[0].title}`;
        imprimirHTML.innerHTML =`<p>${respuestaJson.query.search[0].snippet}. <a href="https://es.wikipedia.org/?curid=${respuestaJson.query.search[0].pageid}">Continuar articulo...</a> </p>`;
    }

     

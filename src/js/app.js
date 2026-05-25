
document.addEventListener("DOMContentLoaded", function(){

    crearGaleria();

})




function crearGaleria(){
    const area = document.querySelector('.contenido__galeria');
    const lista = document.createElement('ul');
    lista.classList.add("lista-galeria")


    for(let i =1; i<=16;i++){
        const campo = document.createElement('li')
        const imagen = document.createElement('img')
        imagen.src = `./build/img/${i}.jpg`;
        imagen.alt = `Imagen ${i}`;

        //event handler
        imagen.onclick = ()=> crearImangen(i);

        campo.appendChild(imagen);
        lista.appendChild(campo);
    }

    area.appendChild(lista);

}



function crearImangen(i){
    //creación del modal

    const modal = document.createElement('div');
        modal.classList.add("modal")

    const pagina = document.querySelector('body');
    pagina.classList.add("overflow-hidden")
        pagina.appendChild(modal)

    const imagen = document.createElement('img')
    imagen.src = `./build/img/${i}.jpg`;
    imagen.alt = `Imagen${i}`;

     const cierre = document.createElement("p");
     cierre.classList.add('btn-cierre');
        cierre.textContent = "x";

        cierre.onclick = cerrarModal;

    modal.appendChild(imagen);
    modal.appendChild(cierre);

}


function cerrarModal(){
    const modal = document.querySelector(".modal");
    modal.classList.add("fadeOut");

    setTimeout(()=>modal?.remove(), 500)
    
}
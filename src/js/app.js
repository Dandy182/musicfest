
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
        imagen.src = `/src/img/gallery/full/${i}.jpg`;
        imagen.alt = `Imagen${i}`

        campo.appendChild(imagen);
        lista.appendChild(campo);
    }

    area.appendChild(lista);

}
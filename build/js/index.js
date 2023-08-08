
document.addEventListener('DOMContentLoaded', () =>{
    iniciarApp();
})




function iniciarApp(){
    crearGaleria()
    
}



function crearGaleria(){
    const galeria = document.getElementById('galeria__imagenes')

    for(let i = 1; i <= 12; i++){
        let img = document.createElement('picture');
        img.innerHTML = `
                        <source srcset="./build/img/thumb/${i}.avif" type="image/webp">
                        <source srcset="./build/img/thumb/${i}.webp" type="image/avif">
                        <img loading="lazy" src="./src/img/thumb/${i}.jpg" alt={i}>
        `;
        galeria.appendChild(img)
    }


}

document.addEventListener('DOMContentLoaded', () =>{
    iniciarApp();
})




function iniciarApp(){
    navegacionFija();
    crearGaleria()
    scrollNav();

    
}



function crearGaleria(){

    let galeria = document.querySelector('.galeria-imagenes');

    for(let i = 1; i <= 12; i++){
        let campo = document.createElement('li');
        let img = document.createElement('picture');
        img.innerHTML = ` 
            <source srcset="/build/img/thumb/${i}.webp" type="image/webp">
            <source srcset="/build/img/thumb/${i}.avif" type="image/avif">
            <img loading="lazy" src="/build/img/thumb/${i}.jpg" alt="vocalista">`

            img.addEventListener('click', () =>{
                mostrarImagen(i)
            })

        campo.appendChild(img)
        galeria.appendChild(campo)
    }
}



//overlay con la imagen
function mostrarImagen(id){

    const img = document.createElement('div')
    img.innerHTML = `<picture> 
            <source srcset="/build/img/grande/${id}.webp" type="image/webp">
            <source srcset="/build/img/grande/${id}.avif" type="image/avif">
            <img loading="lazy" src="/build/img/grande/${id}.jpg" alt="vocalista">
            </picture>
            `
    img.classList.add('imgContent')

    const cerrar = document.createElement('P')
    cerrar.classList.add('btnClose')
    cerrar.innerText = 'X';

    cerrar.addEventListener('click', ()=>{
        const body = document.querySelector('body')
        body.classList.remove('body__fijo')
        overlay.remove()
    })

    const body = document.querySelector('body')
    body.classList.add('body__fijo')
    const overlay = document.createElement('div')
    overlay.classList.add('overlay')

    overlay.addEventListener('click',()=>{
        const body = document.querySelector('body')
        body.classList.remove('body__fijo')
        overlay.remove()}) 
    
    overlay.appendChild(img)
    overlay.appendChild(cerrar)
    body.appendChild(overlay)

}


function scrollNav(){
    let enlaces = document.querySelectorAll('.btnNav');
    
    enlaces.forEach(enlace =>{ enlace.addEventListener("click", (e)=>{
       e.preventDefault()
        const selectScroll = e.target.attributes.href.value;
        const seccion = document.getElementById(selectScroll)
        seccion.scrollIntoView({behavior: "smooth"});
    })})

    
}

function navegacionFija(){
    const barra = document.querySelector('.header');
    const sobreFestival = document.querySelector('.sobreFestival'); 

    window.addEventListener('scroll', () =>{
        let moving = sobreFestival.getBoundingClientRect();
        if(moving.bottom < 0 ){
            barra.classList.add('fijo')
        }else{
            barra.classList.remove('fijo')
        }
    })
}
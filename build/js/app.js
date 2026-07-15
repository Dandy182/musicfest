
document.addEventListener("DOMContentLoaded", function(){
    navegacionFija();
    crearGaleria();
    resaltadorDeEnlaces();
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
    const pagina = document.querySelector('body');
    const modal = document.querySelector(".modal");
        pagina.classList.remove("overflow-hidden");
    modal?.remove() 
    
}

function navegacionFija(){
   const encabezado = document.querySelector(".encabezado");
   const presentacion = document.querySelector(".presentacion");

   document.addEventListener('scroll', function(){
    
    if(presentacion.getBoundingClientRect().bottom < 500 ){
       encabezado.classList.add('fixed');
    }else{
        encabezado.classList.remove('fixed');
    }

   })
}

function resaltadorDeEnlaces(){
    document.addEventListener('scroll', function(){
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.navegacion__principal a');

        let actual = '';
        sections.forEach(section =>{
            const sectionTop = section.offsetTop;
            const sectionHeigth = section.clientHeight;
            const scrollY = window.scrollY;
            
            if(scrollY >= 600 && scrollY < 1700 && section.getAttribute('id') === "LineUp"){
               actual = section.getAttribute('id');
                }else if(scrollY >= 1700 && scrollY < 2200 && section.getAttribute('id') === "Galeria"){
                actual = section.getAttribute('id');
                }else if(scrollY >= 2200 && section.getAttribute('id') === "Boletos"){
                actual = section.getAttribute('id');
             }

        navLinks.forEach(link => {
            link.classList.remove('active');
            if(link.getAttribute('href') === `#${actual}`){
                console.log(`${link.getAttribute('href')} : #${actual}`)
                link.classList.add('active')
            }
        })
        })
    })
   
}
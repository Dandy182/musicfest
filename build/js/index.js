function iniciarApp(){navegacionFija(),crearGaleria(),scrollNav()}function crearGaleria(){let e=document.querySelector(".galeria-imagenes");for(let t=1;t<=12;t++){let n=document.createElement("li"),i=document.createElement("picture");i.innerHTML=` \n            <source srcset="./build/img/thumb/${t}.webp" type="image/webp">\n            <source srcset="./build/img/thumb/${t}.avif" type="image/avif">\n            <img loading="lazy" src="./build/img/thumb/${t}.jpg" alt="vocalista">`,i.addEventListener("click",()=>{mostrarImagen(t)}),n.appendChild(i),e.appendChild(n)}}function mostrarImagen(e){const t=document.createElement("div");t.innerHTML=`<picture> \n            <source srcset="/.build/img/grande/${e}.webp" type="image/webp">\n            <source srcset="/.build/img/grande/${e}.avif" type="image/avif">\n            <img loading="lazy" src="./build/img/grande/${e}.jpg" alt="vocalista">\n            </picture>\n            `,t.classList.add("imgContent");const n=document.createElement("P");n.classList.add("btnClose"),n.innerText="X",n.addEventListener("click",()=>{document.querySelector("body").classList.remove("body__fijo"),a.remove()});const i=document.querySelector("body");i.classList.add("body__fijo");const a=document.createElement("div");a.classList.add("overlay"),a.addEventListener("click",()=>{document.querySelector("body").classList.remove("body__fijo"),a.remove()}),a.appendChild(t),a.appendChild(n),i.appendChild(a)}function scrollNav(){document.querySelectorAll(".btnNav").forEach(e=>{e.addEventListener("click",e=>{e.preventDefault();const t=e.target.attributes.href.value;document.getElementById(t).scrollIntoView({behavior:"smooth"})})})}function navegacionFija(){const e=document.querySelector(".header"),t=document.querySelector(".sobreFestival");window.addEventListener("scroll",()=>{t.getBoundingClientRect().bottom<0?e.classList.add("fijo"):e.classList.remove("fijo")})}document.addEventListener("DOMContentLoaded",()=>{iniciarApp()});
//# sourceMappingURL=index.js.map

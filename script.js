/* ==========================================
   RLD FRAGRANCES
   SCRIPT.JS
========================================== */

// Loader
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
    }, 1000);
});

// Header ao rolar
const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {
        header.style.background = "rgba(0,0,0,.95)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.4)";
    } else {
        header.style.background = "rgba(0,0,0,.65)";
        header.style.boxShadow = "none";
    }

});

// Menu Mobile
const menuBtn = document.querySelector(".menu-mobile");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("ativo");

});

// Fecha menu ao clicar em um link
document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("ativo");

    });

});

// Animação ao rolar
const elementos = document.querySelectorAll(
".card-beneficio, .produto, .depoimento, .faq-item, .sobre-texto, .sobre-imagem"
);

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";

        }

    });

},{
    threshold:0.15
});

elementos.forEach(el=>{

    el.style.opacity="0";
    el.style.transform="translateY(40px)";
    el.style.transition=".8s";

    observer.observe(el);

});

// FAQ
document.querySelectorAll(".faq-item").forEach(item=>{

    const resposta = item.querySelector("p");

    resposta.style.display="none";

    item.addEventListener("click",()=>{

        if(resposta.style.display==="block"){

            resposta.style.display="none";

        }else{

            document.querySelectorAll(".faq-item p").forEach(p=>{

                p.style.display="none";

            });

            resposta.style.display="block";

        }

    });

});

// Rolagem suave
document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        if(destino){

            destino.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// Ano automático no rodapé (caso você queira usar depois)
const ano = new Date().getFullYear();

const copyright = document.querySelector(".copyright");

if(copyright){

    copyright.innerHTML = `© ${ano} RLD Fragrances. Todos os direitos reservados.`;

}

console.log("RLD Fragrances carregado com sucesso.");


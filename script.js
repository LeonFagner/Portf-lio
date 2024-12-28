// Selecionar o ícone e o menu
const menuIcon = document.getElementById("menu-icon");
const navbar = document.getElementById("navbar");


menuIcon.addEventListener("click", () => {
  console.log("cliquei")
  navbar.classList.toggle("navbar");
});


function projetos(){
    let vh = 100; 
    window.scrollTo({
            top: vh * window.innerHeight / 100, 
             behavior: 'smooth'
           });

}

function contatos(){
    vh=300;
    window.scrollTo({
            top: vh * window.innerHeight / 100, 
             behavior: 'smooth'
           });

}

function redirectWhatsApp() {
  const whatsappUrl = "https://wa.me/47992884176?text=Olá Leon,";
   open(whatsappUrl,"_blank"); 
}


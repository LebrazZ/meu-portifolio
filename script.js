console.log("Portfólio carregado com sucesso 🚀");

const cards = document.querySelectorAll(".card");

cards.forEach((card, index) => {

    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";

    setTimeout(() => {
        card.style.transition = "0.6s ease";
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
    }, index * 200);

});

window.addEventListener("scroll", () => {

    const topo = window.scrollY;

    cards.forEach(card => {

        if(topo > 50){
            card.style.boxShadow = "0 0 25px rgba(56,189,248,0.4)";
        } else {
            card.style.boxShadow = "0 0 20px rgba(0,0,0,0.3)";
        }

    });

});

    function sendWhatsapp() {
        const  number = "47992884176";  
        const message = "Olá, gostaria de saber mais informações!"; 
        const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

        window.open(url, "_blank");
    }


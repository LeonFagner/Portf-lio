



document.getElementById('button').addEventListener('click', sendEmail);

function sendEmail() {
  

    const formData = {
        full_name: document.getElementById("full-name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };

    if (!formData.full_name || !formData.email || !formData.subject || !formData.message) {
        alert("Preencha todos os campos antes de enviar.");
        return;
    }

    emailjs.send("service_md6iwnf", "template_7xrwltg", formData)
    
        .then(response => {
            console.log("E-mail enviado com sucesso:", response);
            alert("Mensagem enviada com sucesso!");
        })
        .catch(error => {
            console.error("Erro ao enviar e-mail:", error);
            alert("Ocorreu um erro ao enviar a mensagem.");
        });
}


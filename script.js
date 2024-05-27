document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Formulário enviado!');
});

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

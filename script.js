document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Formul�rio enviado!');
});

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

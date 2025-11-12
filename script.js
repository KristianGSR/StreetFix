// Lógica para el menú móvil
const menuButton = document.getElementById('boton-menu-movil');
const mobileMenu = document.getElementById('menu-movil');
const hamburgerIcon = menuButton.querySelector('svg:first-child');
const closeIcon = menuButton.querySelector('svg:last-child');
const menuLinks = document.querySelectorAll('.menu-movil-link');

// Función para alternar (toggle) el menú
function toggleMenu() {
    mobileMenu.classList.toggle('hidden');
    hamburgerIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
    const isExpanded = mobileMenu.classList.contains('hidden') ? 'false' : 'true';
    menuButton.setAttribute('aria-expanded', isExpanded);
}

// Event listener para el botón
menuButton.addEventListener('click', toggleMenu);

// Event listener para los enlaces (cerrar el menú al hacer clic)
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (!mobileMenu.classList.contains('hidden')) {
            toggleMenu();
        }
    });
});
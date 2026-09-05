const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
const btnReservar = document.getElementById('btn-reservar');
const reservaModal = document.getElementById('reserva-modal');
const closeModal = document.getElementById('close-modal');
const reservaForm = document.getElementById('reserva-form');
const navItems = document.querySelectorAll('.nav-link');

menuToggle.addEventListener('click', () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', !isExpanded);
    navLinks.classList.toggle('active');
});

navItems.forEach(item => {
    item.addEventListener('click', () => {
        if (window.innerWidth < 768) {
            navLinks.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    });
});

btnReservar.addEventListener('click', () => {
    reservaModal.classList.add('show');
    reservaModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
});

closeModal.addEventListener('click', () => {
    reservaModal.classList.remove('show');
    reservaModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
});

reservaModal.addEventListener('click', (e) => {
    if (e.target === reservaModal) {
        reservaModal.classList.remove('show');
        reservaModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }
});

reservaForm.addEventListener('submit', (e) => {
    e.preventDefault();
    reservaModal.classList.remove('show');
    reservaModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    reservaForm.reset();
});
/**
 * CONTROLADOR DE INTERFAZ - CHILEAN ROADTRIPS
 * Cambia dinámicamente las pestañas de navegación sin recargar la página.
 */
function switchPage(pageId, event) {
    // 1. Ocultar todas las secciones de la página
    const sections = document.querySelectorAll('.page-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // 2. Desactivar el estado activo de todos los botones del menú
    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
    });

    // 3. Mostrar la sección que el usuario seleccionó
    const activeSection = document.getElementById(pageId);
    if (activeSection) {
        activeSection.classList.add('active');
    }

    // 4. Marcar como activo el botón del menú que recibió el click
    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }

    // 5. Mover el scroll del navegador al inicio de forma suave
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

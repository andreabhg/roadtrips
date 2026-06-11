/**
 * CONTROLADOR DE INTERFAZ - CHILEAN ROADTRIPS
 * Cambia dinámicamente las pestañas de navegación de forma instantánea.
 */
function switchPage(pageId) {
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

    // 4. Buscar el botón que se presionó de forma manual y activarlo
    // Esto evita usar el parámetro 'event' que rompía la navegación
    const clickedButton = document.querySelector(`button[onclick*="${pageId}"]`);
    if (clickedButton) {
        clickedButton.classList.add('active');
    }

    // 5. Mover el scroll del navegador al inicio de forma suave
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

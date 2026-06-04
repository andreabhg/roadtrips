// CONTROLADOR DE NAVEGACIÓN (CAMBIO DE PÁGINAS)
function switchPage(pageId) {
    // Ocultar todas las secciones
    const sections = document.querySelectorAll('.page-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Desactivar todos los botones del menú
    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
    });

    // Mostrar la sección seleccionada
    const activeSection = document.getElementById(pageId);
    if (activeSection) {
        activeSection.classList.add('active');
    }

    // Activar el botón correspondiente (si no es el botón de llamada a la acción)
    event.currentTarget.classList.add('active');
    
    // Subir scroll automáticamente al cambiar de pestaña
    window.scrollTo({top: 0, behavior: 'smooth'});
}

// SIMULADOR LOGÍSTICO DE LA IA (CHILE ROADTRIPS)
function calcularRuta(event) {
    event.preventDefault(); // Evita que la página se recargue al enviar el formulario

    const destino = document.getElementById('destino').value;
    const resultContainer = document.getElementById('result-container');
    
    // Variables de cálculo para el presupuesto chileno
    let costoBencina = 0;
    let costoPeajes = 0;
    let tipTexto = "";

    // Lógica condicional según la ruta seleccionada (Valores estimados 2026)
    if (destino === 'bahia') {
        costoBencina = 129000;
        costoPeajes = 55900;
        tipTexto = "Ruta 5 Norte: Hay tramos largos sin servicentros cerca de Vallenar. ¡Carga estanque full en La Serena! Imperdibles las empanadas de Huentelauquén en el km 260.";
    } else if (destino === 'valdivia') {
        costoBencina = 127700;
        costoPeajes = 95800;
        tipTexto = "Ruta 5 Sur: Considera peajes troncales laterales si entras a pueblos intermedios. Parada obligatoria en Chimbarongo por unas humitas o el clásico completo en Talca.";
    } else if (destino === 'pvaras') {
        costoBencina = 149900;
        costoPeajes = 113400;
        tipTexto = "Carretera Austral / Los Lagos: Los peajes disminuyen al sur de Puerto Montt, pero el precio del combustible sube considerablemente. Monitorea el estanque si vas a tomar transbordadores.";
    }

    // Calcular suma total
    const costoTotal = costoBencina + costoPeajes;

    // Inyectar los valores formateados en el HTML como pesos chilenos
    document.getElementById('res-bencina').innerText = `$${costoBencina.toLocaleString('es-CL')}`;
    document.getElementById('res-peajes').innerText = `$${costoPeajes.toLocaleString('es-CL')}`;
    document.getElementById('res-total').innerText = `$${costoTotal.toLocaleString('es-CL')}`;
    document.getElementById('ia-tip').innerText = tipTexto;

    // Mostrar el contenedor de resultados con una transición suave
    resultContainer.classList.remove('hidden');
}

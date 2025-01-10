// Cargar el botón de Google Calendar al cargar la página
window.addEventListener('load', loadGoogleCalendarButton);

// Función para mostrar el formulario
document.getElementById('btnAbrir').addEventListener('click', function () {
    document.getElementById('formContainer').classList.remove('d-none'); // Mostrar formulario
    document.getElementById('btnCerrar').classList.remove('d-none');     // Mostrar botón "Cerrar"
    this.classList.add('d-none');                                        // Ocultar botón "Abrir"
});

// Función para cerrar el formulario
document.getElementById('btnCerrar').addEventListener('click', function () {
    document.getElementById('formContainer').classList.add('d-none');    // Ocultar formulario
    document.getElementById('btnAbrir').classList.remove('d-none');      // Mostrar botón "Abrir"
    this.classList.add('d-none');                                        // Ocultar botón "Cerrar"
});

// Función para cargar el script de Google Calendar y mostrar el botón
function loadGoogleCalendarButton() {
    // Verificar si el script ya está cargado
    if (document.getElementById('calendarScript')) return;

    // Cargar el CSS del botón de Google Calendar
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://calendar.google.com/calendar/scheduling-button-script.css';
    document.head.appendChild(link);

    // Cargar el script de Google Calendar
    var script = document.createElement('script');
    script.id = 'calendarScript';
    script.src = 'https://calendar.google.com/calendar/scheduling-button-script.js';
    script.async = true;
    script.onload = function () {
        calendar.schedulingButton.load({
            url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ0vqGWv2o4RElNRP6DFvSH_cK6GMxX_F0HxXa7jEQjZX5wKazG13UZsGANVcPFY_URUXcbs4E-6?gv=true',
            color: '#039BE5',
            label: "Re contacto / Seguimiento",
            target: document.getElementById('btnAgendaContainer')
        });
    };
    document.body.appendChild(script);
}

// Función para cargar el iframe con la URL proporcionada
function cargarIframe(url) {
    const iframeContainer = document.getElementById('iframeContainer');
    iframeContainer.innerHTML = `<iframe src="${url}" width="100%" height="600px" frameborder="0"></iframe>`;
    iframeContainer.classList.remove('d-none'); // Mostrar el contenedor del iframe
}

// Función para abrir el sheet de "Seguimiento de Gestión"
document.getElementById('btnSeguimiento').addEventListener('click', function () {
    cargarIframe('https://docs.google.com/spreadsheets/d/1vvNl1jsEF2wj7ERg88Vf9Fn6v-q1fXkA5UYX8ZrjFGM/edit?gid=2142755371#gid=2142755371');
});

// Evento para el botón "Historial de Contacto"
document.getElementById('btnHistorial').addEventListener('click', function () {
    const seleccion = prompt('Seleccione una vendedora: Ana o Salo').toLowerCase();

    if (seleccion === 'ana') {
        // Cargar el sheet de Ana incrustado
        cargarIframe('https://docs.google.com/spreadsheets/d/1HVBDAk7CBVxx1zqCaw3-EAEDQ9-AsBfKUdLU3i8TkJc/edit?gid=2142755371#gid=2142755371');
    } else if (seleccion === 'salo') {
        // Cargar el sheet de Salo incrustado
        cargarIframe('https://docs.google.com/spreadsheets/d/1goZHPheXKXtIxzLdnY-EMlnyKapR__zhQ_Di-s1orWM/edit?gid=2142755371#gid=2142755371');
    } else {
        alert('Opción no válida. Por favor, seleccione Ana o Salo.');
    }
});

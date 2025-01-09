// Enlace del Google Sheet (enlace de visualización pública)
const sheetUrl = "https://docs.google.com/spreadsheets/d/1vvNl1jsEF2wj7ERg88Vf9Fn6v-q1fXkA5UYX8ZrjFGM/edit?gid=2142755371#gid=2142755371";

// Generar el iframe dinámicamente
const iframe = document.createElement("iframe");
iframe.src = sheetUrl;
iframe.style.border = "1px solid #ccc";
iframe.style.width = "100%";
iframe.style.height = "100vh";

// Insertar el iframe en el contenedor
document.getElementById("sheet-container").appendChild(iframe);

// Configuración del botón de Google Calendar
window.addEventListener('load', function () {
    var target = document.getElementById('re-contacto-button');
    calendar.schedulingButton.load({
        url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ0vqGWv2o4RElNRP6DFvSH_cK6GMxX_F0HxXa7jEQjZX5wKazG13UZsGANVcPFY_URUXcbs4E-6?gv=true',
        color: '#039BE5',
        label: "Re contacto / Seguimiento",
        target,
    });
});

// Elementos del DOM
const openFormButton = document.getElementById('open-form');
const closeFormButton = document.getElementById('close-form');
const formContainer = document.getElementById('form-container');

// Evento para abrir el formulario
openFormButton.addEventListener('click', function () {
    formContainer.style.display = 'block';
});

// Evento para cerrar el formulario
closeFormButton.addEventListener('click', function () {
    formContainer.style.display = 'none';
});

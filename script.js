window.addEventListener('scroll', function () {
    var subnavbar = document.getElementById('subnavbar');
    if (window.scrollY > 0) {
        subnavbar.classList.add('white-bg');
    } else {
        subnavbar.classList.remove('white-bg');
    }
});


// Obtiene la fecha actual
const fechaActual = new Date();

// Define la fecha de finalización de la carrera (año, mes, día)
const fechaFinalizacionCarrera = new Date(2029, 2, 25); // Año, mes (0-indexed), día

// Calcula la diferencia entre las fechas
const diferenciaTiempo = fechaFinalizacionCarrera.getTime() - fechaActual.getTime();

// Calcula los años restantes
const anosRestantes = Math.floor(diferenciaTiempo / (1000 * 60 * 60 * 24 * 365));

// Calcula la nueva fecha actual después de los años restantes
const nuevaFechaActual = new Date(fechaActual.getFullYear() + anosRestantes, fechaActual.getMonth(), fechaActual.getDate());

// Calcula la diferencia entre la nueva fecha actual y la fecha de finalización de la carrera
const nuevaDiferenciaTiempo = fechaFinalizacionCarrera.getTime() - nuevaFechaActual.getTime();

// Calcula los meses restantes
const mesesRestantes = Math.floor(nuevaDiferenciaTiempo / (1000 * 60 * 60 * 24 * 30));

// Calcula los días restantes
const diasRestantes = Math.floor((nuevaDiferenciaTiempo / (1000 * 60 * 60 * 24)) % 30);

// Muestra la diferencia en el HTML
const contadorElemento = document.getElementById("contador");
contadorElemento.textContent = `Faltan ${anosRestantes} años, ${mesesRestantes} meses y ${diasRestantes} días`;




document.addEventListener("DOMContentLoaded", function () {
    // Obtener los elementos de la barra de navegación y los banners correspondientes
    const navInicio = document.getElementById('inicio');
    const navHabilidades = document.getElementById('habilidades');
    const bannerInicio = document.getElementById('banner-inicio');
    const bannerHabilidades = document.getElementById('container-habilidades');

    // Agregar event listeners para el evento 'mouseenter' y 'mouseleave' a los elementos de la barra de navegación
    navInicio.addEventListener('mouseenter', function () {
        bannerInicio.classList.add('active');
    });
    navInicio.addEventListener('mouseleave', function () {
        bannerInicio.classList.remove('active');
    });

    navHabilidades.addEventListener('mouseenter', function () {
        bannerHabilidades.classList.add('active');
    });
    navHabilidades.addEventListener('mouseleave', function () {
        bannerHabilidades.classList.remove('active');
    });
});

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
    const navTrayectoria = document.getElementById('trayectoria');
    const navSobremi = document.getElementById('sobremi');
    const navProyectos = document.getElementById('proyectos');
    const bannerInicio = document.getElementById('banner-inicio');
    const bannerHabilidades = document.getElementById('container-habilidades');
    const bannerTrayectoria = document.getElementById('container-trayectoria');
    const bannerSobremi = document.getElementById('container-sobremi');
    const bannerProyectos = document.getElementById('container-proyectos');

    // Función para activar los banners correspondientes al hacer clic en los elementos de la barra de navegación
    function activarBannerYDesplazar(navElement, banner) {
        // Desplazar a la posición del banner
        banner.scrollIntoView({ behavior: "smooth", block: "center" });

        // Activar el estado "activo" en el banner correspondiente
        bannerInicio.classList.remove('active');
        bannerHabilidades.classList.remove('active');
        bannerTrayectoria.classList.remove('active');
        bannerSobremi.classList.remove('active');
        bannerProyectos.classList.remove('active');
        banner.classList.add('active');

        // Activar el estado "activo" en el elemento de navegación correspondiente
        navInicio.classList.remove('active');
        navHabilidades.classList.remove('active');
        navTrayectoria.classList.remove('active');
        navSobremi.classList.remove('active');
        navProyectos.classList.remove('active');
        navElement.classList.add('active');
    }

    // Agregar event listeners para el evento 'mouseenter' y 'mouseleave' a los elementos de la barra de navegación
    navInicio.addEventListener('mouseenter', function () {
        bannerInicio.classList.add('active');
    });
    navInicio.addEventListener('mouseleave', function () {
        bannerInicio.classList.remove('active');
    });
    navInicio.addEventListener('click', function () {
        activarBannerYDesplazar(navInicio, bannerInicio);
    });

    navHabilidades.addEventListener('mouseenter', function () {
        bannerHabilidades.classList.add('active');
    });
    navHabilidades.addEventListener('mouseleave', function () {
        bannerHabilidades.classList.remove('active');
    });
    navHabilidades.addEventListener('click', function () {
        activarBannerYDesplazar(navHabilidades, bannerHabilidades);
    });

    navTrayectoria.addEventListener('mouseenter', function () {
        bannerTrayectoria.classList.add('active');
    });
    navTrayectoria.addEventListener('mouseleave', function () {
        bannerTrayectoria.classList.remove('active');
    });
    navTrayectoria.addEventListener('click', function () {
        activarBannerYDesplazar(navTrayectoria, bannerTrayectoria);
    });

    navSobremi.addEventListener('mouseenter', function () {
        bannerSobremi.classList.add('active');
    });
    navSobremi.addEventListener('mouseleave', function () {
        bannerSobremi.classList.remove('active');
    });
    navSobremi.addEventListener('click', function () {
        activarBannerYDesplazar(navSobremi, bannerSobremi);
    });

    navProyectos.addEventListener('mouseenter', function () {
        bannerProyectos.classList.add('active');
    });
    navProyectos.addEventListener('mouseleave', function () {
        bannerProyectos.classList.remove('active');
    });
    navProyectos.addEventListener('click', function () {
        activarBannerYDesplazar(navProyectos, bannerProyectos);
    });
});


/* -------------------------------------------- */

function cambiarTema() {
    var body = document.body;
    body.id = (body.id === "light") ? "dark" : "light";
    // Almacenar la preferencia del usuario en el almacenamiento local
    localStorage.setItem("tema", body.id);
}

// Verificar si hay una preferencia de tema almacenada
if (localStorage.getItem("tema")) {
    var body = document.body;
    // Establecer el tema según la preferencia del usuario
    body.id = localStorage.getItem("tema");
}

// Evento clic para cambiar el tema
document.getElementById("changeColor").addEventListener("click", function (event) {
    event.preventDefault();
    cambiarTema();
});
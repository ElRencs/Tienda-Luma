document.addEventListener("DOMContentLoaded", () => {
    const visor = document.getElementById("visor");
    const imagenAmpliada = document.getElementById("imagenAmpliada");
    const cerrarVisor = document.getElementById("cerrarVisor");

    document.querySelectorAll(".producto img").forEach(imagen => {
        imagen.style.cursor = "zoom-in";

        imagen.addEventListener("click", () => {
            imagenAmpliada.src = imagen.src;
            visor.classList.add("activo");
        });
    });

    cerrarVisor.addEventListener("click", () => {
        visor.classList.remove("activo");
    });

    visor.addEventListener("click", evento => {
        if (evento.target === visor) {
            visor.classList.remove("activo");
        }
    });
});

// ==============================
// CARRUSEL AUTOMÁTICO DE LA TIENDA
// ==============================

document.addEventListener("DOMContentLoaded", () => {

    const imagenes = document.querySelectorAll(
        ".carrusel-tienda .imagen-carrusel"
    );

    if (imagenes.length > 1) {

        let imagenActual = 0;

        setInterval(() => {

            imagenes[imagenActual].classList.remove("activa");

            imagenActual = (imagenActual + 1) % imagenes.length;

            imagenes[imagenActual].classList.add("activa");

        }, 3500);

    }

});

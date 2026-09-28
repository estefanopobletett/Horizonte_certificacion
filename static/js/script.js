// CONEXION
console.log("Conexion exitosa...");

// VARIABLES
let numCarrito = document.querySelector("#libros");
let anadir = document.querySelector("#anadir");
let anadir2 = document.querySelector("#anadir2");
let anadir3 = document.querySelector("#anadir3");
let video = document.getElementById("videin");
let button = document.querySelector("#loginn");

// CARRITO
anadir.addEventListener("click", function () {
    let contador = parseInt(numCarrito.innerText);
    numCarrito.innerText = contador + 1;
});

anadir2.addEventListener("click", function () {
    let contador = parseInt(numCarrito.innerText);
    numCarrito.innerText = contador + 1;
});

anadir3.addEventListener("click", function () {
    let contador = parseInt(numCarrito.innerText);
    numCarrito.innerText = contador + 1;
});

// CAMBIO DE VIDEO
video.addEventListener("mouseover", function () {
    video.src = "static/videos/3969597-uhd_3840_2160_25fps.mp4";
});

video.addEventListener("mouseout", function () {
    video.src = "static/videos/14759309_3840_2160_30fps.mp4";
});

// LOGIN
button.addEventListener("click", function () {
    let email = document.getElementById("gmail").value;
    alert(`Hola, ${email}`);
});
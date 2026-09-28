console.log("Conexion exitosa...")

let numCarrito = document.querySelector("#libros");
let anadir = document.querySelector("#anadir");
let anadir2 = document.querySelector("#anadir2");
let anadir3 = document.querySelector("#anadir3");

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




const foto = document.getElementById("videin")


foto.addEventListener("mouseover", function () {
    foto.src = "images/biblo2.png"
})

foto.addEventListener("mouseout", function () {
    foto.src = "images/biblo.png"
})


const button = document.querySelector("#loginn")
button.addEventListener("click", function () {
    let email = document.getElementById("gmail").value;
    alert(`Hola, ${email}`)
});
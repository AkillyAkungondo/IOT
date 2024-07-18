const btnOn = document.getElementById("btn-on");
const btnOff = document.getElementById("btn-off");
const spanEstado = document.getElementById("estado");

btnOn.addEventListener("click", () => {
  if (spanEstado.textContent === "Desligado") {
    spanEstado.textContent = "Ligado";
    console.log("Ligado");
    spanEstado.style.color="#4caf50"
}
});

btnOff.addEventListener("click", () => {
    if (spanEstado.textContent === "Ligado") {
        spanEstado.textContent = "Desligado";
        console.log("Desligado");
        spanEstado.style.color="#8e3e3e"
    } 
  
});

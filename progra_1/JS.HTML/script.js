function mostrarNombre() {
  const nombre = document.getElementById("nombre").value;
  const resultado = document.getElementById("resultado");

  if (nombre.trim() === "") {
    resultado.textContent = "Por favor, escribe tu nombre.";
    resultado.style.color = "red";
  } else {
    resultado.textContent = "Hola ONICHAN, " + nombre + " 🥺👉👈";
    resultado.style.color = "#00477A";
  }
}
var lista = [];
function InsertarLista(){
  var valorAleatorio =Math.floor (Math.random()*10);
  const resultado = document.getElementById("resultado");

  lista.push(valorAleatorio);
  resultado.textContent=lista.toString();
}
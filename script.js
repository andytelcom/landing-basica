const form = document.querySelector(".form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  alert("Mensaje enviado correctamente. Pronto nos comunicaremos contigo.");

  form.reset();
});
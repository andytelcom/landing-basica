const form = document.querySelector(".form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  alert("Gracias por escribirnos. Para una respuesta más rápida, también puedes contactarnos por WhatsApp.");

  form.reset();
});
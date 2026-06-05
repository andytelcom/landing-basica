"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Función para cargar JSON
function loadData() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("data.json");
        const data = yield response.json();
        renderPlanes(data.planes);
        renderBeneficios(data.beneficios);
        renderFAQ(data.faq);
    });
}
// Renderizar planes
function renderPlanes(planes) {
    const planesContainer = document.querySelector("#precios .cards");
    planesContainer.innerHTML = "";
    planes.forEach(plan => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
      <h3>${plan.nombre}</h3>
      <p>${plan.descripcion}</p>
      <strong>${plan.precio}</strong>
    `;
        planesContainer.appendChild(card);
    });
}
// Renderizar beneficios
function renderBeneficios(beneficios) {
    const ul = document.querySelector("#beneficios .benefits");
    ul.innerHTML = "";
    beneficios.forEach(b => {
        const li = document.createElement("li");
        li.textContent = b;
        ul.appendChild(li);
    });
}
// Renderizar FAQ
function renderFAQ(faq) {
    const faqContainer = document.querySelector("#faq-container");
    faqContainer.innerHTML = "";
    faq.forEach(f => {
        const div = document.createElement("div");
        div.innerHTML = `<h3>${f.pregunta}</h3><p>${f.respuesta}</p>`;
        faqContainer.appendChild(div);
    });
}
// Validación de formulario
const form = document.querySelector(".form");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    const nombre = form.querySelector("input[type=text]").value.trim();
    const email = form.querySelector("input[type=email]").value.trim();
    const mensaje = form.querySelector("textarea").value.trim();
    if (!nombre || !email || !mensaje) {
        alert("Por favor completa todos los campos.");
        return;
    }
    if (!email.includes("@")) {
        alert("Correo inválido.");
        return;
    }
    alert("Gracias por escribirnos. Para una respuesta más rápida, también puedes contactarnos por WhatsApp.");
    form.reset();
});
// Cargar datos al inicio
loadData();

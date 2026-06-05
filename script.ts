// Tipos de datos
interface Plan {
  nombre: string;
  descripcion: string;
  precio: string;
}

interface FAQ {
  pregunta: string;
  respuesta: string;
}

interface Data {
  planes: Plan[];
  beneficios: string[];
  faq: FAQ[];
}

// Función para cargar JSON
async function loadData() {
  const response = await fetch("data.json");
  const data: Data = await response.json();

  renderPlanes(data.planes);
  renderBeneficios(data.beneficios);
  renderFAQ(data.faq);
}

// Renderizar planes
function renderPlanes(planes: Plan[]) {
  const planesContainer = document.querySelector("#precios .cards")!;
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
function renderBeneficios(beneficios: string[]) {
  const ul = document.querySelector("#beneficios .benefits")!;
  ul.innerHTML = "";
  beneficios.forEach(b => {
    const li = document.createElement("li");
    li.textContent = b;
    ul.appendChild(li);
  });
}

// Renderizar FAQ
function renderFAQ(faq: FAQ[]) {
  const faqContainer = document.querySelector("#faq-container")!;
  faqContainer.innerHTML = "";
  faq.forEach(f => {
    const div = document.createElement("div");
    div.innerHTML = `<h3>${f.pregunta}</h3><p>${f.respuesta}</p>`;
    faqContainer.appendChild(div);
  });
}

// Validación de formulario
const form = document.querySelector(".form") as HTMLFormElement;
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nombre = (form.querySelector("input[type=text]") as HTMLInputElement).value.trim();
  const email = (form.querySelector("input[type=email]") as HTMLInputElement).value.trim();
  const mensaje = (form.querySelector("textarea") as HTMLTextAreaElement).value.trim();

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
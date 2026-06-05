interface Plan { nombre: string; descripcion: string; precio: string; }
interface FAQ { pregunta: string; respuesta: string; }

interface Data {
  planes: Plan[];
  beneficios: string[];
  faq: FAQ[];
}

async function loadData() {
  const response = await fetch("data.json");
  const data: Data = await response.json();

  renderPlanes(data.planes);
  renderBeneficios(data.beneficios);
  renderFAQ(data.faq);
}

function renderPlanes(planes: Plan[]) {
  const container = document.querySelector("#planes-container")!;
  container.innerHTML = "";
  planes.forEach(plan => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<h3>${plan.nombre}</h3><p>${plan.descripcion}</p><strong>${plan.precio}</strong>`;
    container.appendChild(card);
  });
}

function renderBeneficios(beneficios: string[]) {
  const container = document.querySelector("#beneficios-container")!;
  container.innerHTML = "";
  beneficios.forEach(b => {
    const li = document.createElement("li");
    li.textContent = b;
    container.appendChild(li);
  });
}

function renderFAQ(faq: FAQ[]) {
  const container = document.querySelector("#faq-container")!;
  container.innerHTML = "";
  faq.forEach(f => {
    const div = document.createElement("div");
    div.innerHTML = `<h3>${f.pregunta}</h3><p>${f.respuesta}</p>`;
    container.appendChild(div);
  });
}

const form = document.querySelector(".form") as HTMLFormElement;
form.addEventListener("submit", e => {
  e.preventDefault();
  const nombre = (form.querySelector("input[type=text]") as HTMLInputElement).value.trim();
  const email = (form.querySelector("input[type=email]") as HTMLInputElement).value.trim();
  const mensaje = (form.querySelector("textarea") as HTMLTextAreaElement).value.trim();

  if (!nombre || !email || !mensaje) return alert("Por favor completa todos los campos.");
  if (!email.includes("@")) return alert("Correo inválido.");

  alert("Gracias por escribirnos. Para una respuesta más rápida, también puedes contactarnos por WhatsApp.");
  form.reset();
});

loadData();
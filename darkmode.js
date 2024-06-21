const switcheroo = document.querySelector("#theme--toggle");
const preferencia = localStorage.getItem("theme") || "light";

switcheroo.addEventListener("change", alterarTema);

function alterarTema() {
  const temaAtual = document.body.getAttribute("class");
  const body = document.body;
  if (temaAtual === "light") {
    body.classList.add("dark");
    body.classList.remove("light");
    localStorage.setItem("theme", "dark");
  } else {
    body.classList.remove("dark");
    body.classList.add("light");
    localStorage.setItem("theme", "light");
  }
}

function resgatarTema() {
  document.body.classList.add(preferencia);
}

resgatarTema();

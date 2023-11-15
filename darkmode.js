// const toggle =  document.querySelector("button");
const toggle = document.querySelector("img");



toggle.addEventListener("click", () => {
  document.body.classList.toggle("tema--escuro");
  toggle.src =
    toggle.getAttribute("src") === "icon-moon.svg"
      ? "icon-sun.svg"
      : "icon-moon.svg";
});

// Togglear automaticamente conforme horário local do usuário

let hora = new Date().getHours();

atualizarTema();
function atualizarTema() {
// verificar se é de "noite", caso seja, colocamos o tema escuro, caso não seja, REMOVEMOS o tema escuro
    hora >= 18 || hora <= 6
    ? document.body.classList.add("tema--escuro")
    : document.body.classList.remove("tema--escuro");
}

// 

setInterval(atualizarTema, 60000)

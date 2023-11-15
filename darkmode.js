// const toggle =  document.querySelector("button");
const toggle = document.querySelector("img");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("tema--escuro");
  toggle.src =
    toggle.getAttribute("src") === "icon-moon.svg"
      ? "icon-sun.svg"
      : "icon-moon.svg";
});

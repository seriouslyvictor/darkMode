const switcheroo = document.querySelector("#theme--toggle");

switcheroo.addEventListener("change", () => {
  const elBody = document.body;
  elBody.classList.toggle("dark");
  elBody.classList.toggle("light");
});

const labelDiv = document.getElementById("energy-info");
const image = document.getElementById("product-image");

labelDiv.addEventListener("click", () => {
  labelDiv.classList.toggle("hidden");
  image.classList.toggle("hidden");
});

image.addEventListener("click", () => {
  labelDiv.classList.toggle("hidden"); // Zobrazí tabulku
  image.classList.toggle("hidden");
});

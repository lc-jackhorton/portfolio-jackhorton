const toggle = document.getElementById("darkmodetoggle");

toggle.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark_mode");
});
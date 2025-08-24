const toggleSwitch = document.querySelector('input[type="checkbox"]');
const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
  document.body.classList.add("dark-mode");
}

toggleSwitch.addEventListener("change", function () {
  toggleSwitch.disabled = true;
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
  setTimeout(() => {
    toggleSwitch.disabled = false;
  }, 1000);
});



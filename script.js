const toggleSwitch = document.querySelector('input[type="checkbox"]');
const currentTheme = localStorage.getItem("theme");


if (currentTheme === "dark") {
  document.body.classList.add("dark-mode");
  toggleSwitch.checked = true; 
} else {
  document.body.classList.remove("dark-mode");
  toggleSwitch.checked = false; 
}


toggleSwitch.addEventListener("change", function () {
  toggleSwitch.disabled = true;
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
  setTimeout(() => {
    toggleSwitch.disabled = false;
  }, 1000);
});

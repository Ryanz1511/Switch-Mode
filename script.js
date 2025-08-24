const toggleSwitch = document.querySelector('#theme-toggle');
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {
  document.body.classList.add("dark-mode");
  toggleSwitch.checked = true;
} else {
  toggleSwitch.checked = false;
}

toggleSwitch.addEventListener("change", function () {
  toggleSwitch.disabled = true;
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("theme", toggleSwitch.checked ? "dark" : "light");
  setTimeout(() => {
    toggleSwitch.disabled = false;
  }, 1000);
});

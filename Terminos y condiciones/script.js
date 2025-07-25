const checkbox = document.getElementById('acceptCheckbox');
const button = document.getElementById('continueBtn');

checkbox.addEventListener('change', () => {
  button.disabled = !checkbox.checked;
});

button.addEventListener('click', () => {
  window.location.href = "index.html"; // Redirección al index
});
function saveUserPreferences(event) {
  event.preventDefault(); // prevent form submit reload

  const userPreferences = {
    theme: document.getElementById('theme').value,
    fontSize: document.getElementById('fontSize').value
  };

  localStorage.setItem('userPreferences', JSON.stringify(userPreferences));
  alert('Preferences saved successfully!');
  applyPreferences();
}

function loadUserPreferences() {
  const saved = localStorage.getItem('userPreferences');
  if (!saved) return;

  const userPreferences = JSON.parse(saved);
  document.getElementById('theme').value = userPreferences.theme;
  document.getElementById('fontSize').value = userPreferences.fontSize;

  applyPreferences();
}

function clearUserPreferences() {
  localStorage.removeItem('userPreferences');
  document.getElementById('theme').value = 'light';
  document.getElementById('fontSize').value = '';
  document.body.style.backgroundColor = 'black';
  document.body.style.fontSize = '';
}

function applyPreferences() {
  const theme = document.getElementById('theme').value;
  const fontSize = document.getElementById('fontSize').value;

  document.body.style.backgroundColor = theme === 'dark' ? 'black' : 'white';
  document.body.style.color = theme === 'dark' ? 'white' : 'black';

  if (fontSize) {
    document.body.style.fontSize = `${fontSize}px`;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  loadUserPreferences();

  document.getElementById('preferencesForm').addEventListener('submit', saveUserPreferences);
  document.getElementById('clearButton').addEventListener('click', clearUserPreferences);
});

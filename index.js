// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

console.log('ad');

const checkbox = document.getElementById('checkbox_modal');

checkbox.addEventListener('change', (e) => {
  console.log('привет!');

  if (e.target.checked) {
    console.log('привет!');
  }
});

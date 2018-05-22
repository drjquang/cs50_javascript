// Creating event handler for button
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('button').onclick = count;
});
// Initialize variable
let counter = 0;
// This is the function to count number
function count() {
  counter++;
  document.querySelector('#counter').innerHTML = counter;
  if (counter % 10 === 0) {
    alert(`Counter is at ${counter}`);
  }
}

const setup = document.getElementById('setup');
const punchline = document.getElementById('punchline');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', getJoke);

function getJoke() {
  fetch('https://official-joke-api.appspot.com/random_joke')
    .then(response => response.json())
    .then(data => {
      animateText(setup, data.setup);
      animateText(punchline, data.punchline);
    })
    .catch(error => {
      animateText(setup, "Oops! Couldn't fetch a joke.");
      punchline.textContent = "";
      console.error(error);
    });
}

function animateText(element, text) {
  element.classList.remove('fade-in');
  void element.offsetWidth; // force reflow
  element.textContent = text;
  element.classList.add('fade-in');
}

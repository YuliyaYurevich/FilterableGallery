const allButton = document.querySelector('.all');
const dogsButton = document.querySelector('.dogs');
const catsButton = document.querySelector('.cats');
const birdsButton = document.querySelector('.birds');
const dogs = document.querySelectorAll('.dog');
const cats = document.querySelectorAll('.cat');
const birds = document.querySelectorAll('.bird');

dogsButton.addEventListener('click', function () {
  allShown();
  cats.forEach((cat) => cat.classList.add('hide'));
  birds.forEach((bird) => bird.classList.add('hide'));
});

catsButton.addEventListener('click', function () {
  allShown();
  dogs.forEach((dog) => dog.classList.add('hide'));
  birds.forEach((bird) => bird.classList.add('hide'));
});

birdsButton.addEventListener('click', function () {
  allShown();
  cats.forEach((cat) => cat.classList.add('hide'));
  dogs.forEach((dog) => dog.classList.add('hide'));
});

allButton.addEventListener('click', () => {
  allShown();
});

function allShown() {
  cats.forEach((cat) => cat.classList.remove('hide'));
  dogs.forEach((dog) => dog.classList.remove('hide'));
  birds.forEach((bird) => bird.classList.remove('hide'));
}

// const p = document.querySelectorAll('p');
// const imgs = document.querySelectorAll('.item img');
// const heading = document.querySelector('h2');

// console.log(heading.outerHTML);

// const veganPizza = document.querySelector('.pizza');
// console.log(veganPizza.textContent);

// veganPizza.insertAdjacentText('afterbegin', '🍕');

const pic = document.querySelector('.nice');
pic.classList.add('open');

console.log(pic.classList);

function toggleRound() {
  pic.classList.toggle('round');
}
pic.addEventListener('click', toggleRound);

pic.alt = 'cute pup'; // setter

console.log(pic.alt); // getter

pic.addEventListener('load', function () {
  console.log(pic.naturalWidth);
});

pic.setAttribute('alt', 'REALLY CUTE PUP');
console.log(pic.getAttribute('alt'));

const custom = document.querySelector('.custom');
console.log(custom.dataset);

custom.addEventListener('click', function () {
  alert(`Welcome ${custom.dataset.name} ${custom.dataset.last}`);
});

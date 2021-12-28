// const p = document.querySelector('p');
// const img = document.querySelectorAll('.item img');
// const item2 = document.querySelector('.item2');
// const item2Image = item2.querySelector('img');
// const heading = document.querySelector('h2');

// heading.textContent = 'Wes is cool';

// // console.log(heading.textContent);
// // console.log(heading.innerText);

// // console.log(heading.innerHTML);
// // console.log(heading.outerHTML);

// const pizzaList = document.querySelector('.pizza');
// console.log(pizzaList);

// // pizzaList.textContent = `${pizzaList.textContent} 🍕`;

// pizzaList.insertAdjacentText('afterbegin', '🍕');

const pic = document.querySelector('.nice');
console.log(pic.classList);

pic.classList.add('open');

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

// custom.addEventListener('click', function () {
//   alert(`Welcome ${custom.dataset.name} ${custom.dataset.last}`);
// });

console.log('it works great!');

// const item = document.querySelector('.item');

const width = 500;
const src = `https://source.unsplash.com/random/${width}`;
const desc = `Cute Pup`;
const myHTML = `
<div class="wrapper">
    <h2>Cute ${desc}</h2>
    <img src="${src}" alt ="${desc}" />
</div>
`;

// console.log(myHTML);

// const itemImage = document.querySelector('.wrapper img');
// console.log(itemImage);

// itemImage.classList.add('round');

// turn a string into a DOM element

const myFragment = document.createRange().createContextualFragment(myHTML);

console.log(myFragment);
console.log(myFragment.querySelector('img'));

document.body.appendChild(myFragment);

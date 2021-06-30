const butts = document.querySelector('.butts');
const coolButton = document.querySelector('.cool');

function handleClick() {
  console.log('IT GOT CLICKED!!');
}

const hooray = () => console.log('HOORAY!');

butts.addEventListener('click', handleClick);
coolButton.addEventListener('click', hooray);

// butts.removeEventListener('click', handleClick);

// listen on multiple items

const buyButtons = document.querySelectorAll('button.buy');

function buyListener(event) {
  const button = event.target;
  console.log('You clicked a button');
  console.log(button.textContent);
  //   console.log('You are buying it!');
  //   console.log(event);
  //   console.log(parseFloat(event.target.dataset.price));
  console.log(event.target);
  console.log(event.currentTarget);
  console.log(event.target === event.currentTarget);
  // STOP THIS EVENT FROM BUBBLING UP
  //   event.stopPropagation();
}

buyButtons.forEach(function (buyButton) {
  buyButton.addEventListener('click', buyListener);
});

window.addEventListener(
  'click',
  function (event) {
    console.log('YOU CLICKED THE WINDOW');
    console.log(event.target);
    console.log(event.type);
    console.log(event.bubbles);
    // event.stopPropagation();
  },
  { capture: false }
);

const photoEl = document.querySelector('.photo');

photoEl.addEventListener('mouseenter', function (e) {
  //   console.log(e.currentTarget);
  console.log(this);
});

// function buyItem() {
//   console.log('BUYING ITEM');
// }

// function buyListener(buyButton) {
//   console.log('BINDING THE BUY BUTTON');
//   buyButton.addEventListener('click', buyItem);
// }

// // buyButtons.forEach(button => {
//     buyButtons.addEventListener('click', () => {
//         console.log('YOU CLICKED IT');
//     });
// });

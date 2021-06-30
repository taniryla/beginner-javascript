console.log('it works');

const myParagraph = document.createElement('p');
myParagraph.textContent = 'I am a P';
myParagraph.classList.add('special');
console.log(myParagraph);

const myImage = document.createElement('img');
myImage.src = 'https://source.unsplash.com/random/300x300';
myImage.alt = 'Nice photo';
console.log(myImage);

const myDiv = document.createElement('div');
myDiv.classList.add = 'wrapper';
console.log(myDiv);

myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);
document.body.appendChild(myDiv);

// oh shoot! we need to add something to the top like a heading!

const heading = document.createElement('h2');
heading.textContent = 'Cool Things';

myDiv.insertAdjacentElement('afterbegin', heading);

const list = document.createElement('ul');
const li1 = document.createElement('li');
li1.textContent = 'One';
list.appendChild(li1);

document.body.insertAdjacentElement('afterbegin', list);

const li2 = li1.cloneNode(true);
li2.textContent = 'Two';
list.insertAdjacentElement('afterbegin', li1);

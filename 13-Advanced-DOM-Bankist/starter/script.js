'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// todo: DOM selection
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSection = document.querySelectorAll('.section');

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(document.getElementsByClassName('btn'));

//todo: Creating and inserting elements
//.insetAdjacentHTML()
const message = document.createElement('div');

message.classList.add('cookie-message');

// message.textContent() we can't use it here because we can't write html when use .textContent() only text.

message.innerHTML =
  'We use cookie for improved functionality and analytics, <button class="btn btn--close-cookie"> Got it!</button>';

//todo place the cookie message

// header.prepend(message);
header.append(message);
// header.before(message);
// header.after(message);

// header.prepend(message.cloneNode(true)); for show the same element multiple place at the same time

//todo: delete an element

document.querySelector('.btn--close-cookie').addEventListener('click', () => {
  message.remove();
});
// todo:style attribute

message.style.backgroundColor = '#37383d';
message.style.width = '105%';

//console style attributes if it's written inline
console.log(message.style.color);
console.log(message.style.backgroundColor);
// todo: we can console style with getComputedStyle() method

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

//todo: assign height using js

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

//todo: change the dynamic color value

document.documentElement.style.setProperty('--color-primary', 'goldenrod');

//todo: attributes section

const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

// todo:set Attributes
logo.setAttribute('developer', 'Jahidul');
console.log(logo.getAttribute('developer'));

//todo: scroll animation

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);
  console.log(e.target.getBoundingClientRect());
  console.log('current scroll (X/Y)', window.pageXOffset, window.pageYOffset);
  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  //scroll effect
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  section1.scrollIntoView({ behavior: 'smooth' });
});

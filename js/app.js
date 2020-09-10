
/**
 * Global Variables
/*
const navbar = document.querySelector('#navbar__list');
const sections = document.querySelectorAll('section');
*/

const navbar = document.querySelector("#navbar__list");
const sections = document.getElementsByTagName('section');

/**
 * End Global Variables
 */



// build navigation from sections

function buildNav() {
  for (item of sections) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    let text = item.getAttribute('data-nav');
    li.className = 'menu__link';
    li.classList.add(item.getAttribute('id'));
    a.href = '#' + item.id;
    a.innerText = text;
    li.appendChild(a);
    navbar.appendChild(li);
  }
}

buildNav()


//add class 'active' to section when near top of viewport

function setActive() {
  for (const section of sections) {

    const elem = section.getBoundingClientRect();
    if (
      elem.top <= 350 && elem.bottom >= 350
    ) {
      const id = section.getAttribute('id');
      document.querySelector('.' + id).classList.add('active');
      section.classList.add('active-class');

    } else {
      const id = section.getAttribute('id');
      document.querySelector('.' + id).classList.remove('active');
      section.classList.remove('active-class');
    }
  }
}

document.addEventListener('scroll', function () {
  setActive();
});


//create the scroll to top button
const btn = document.createElement("BUTTON");
btn.innerText = "Top";
btn.setAttribute('id', 'topBtn');
document.body.appendChild(btn);



//add active class to scroll to top button remove when user scrolls near the top view
function showButton() {
  if (document.body.scrollTop >= 350 || document.documentElement.scrollTop >= 350) {
    btn.setAttribute('class', 'active-button');
    //remove active class when user scrolls near the top view
  } else {
    btn.classList.remove('active-button');
  }
}


//show scroll to top button
window.onscroll = function () {
  showButton()
};


//scrollTop when clicked

function toTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

document.addEventListener('click', function () {
  toTop();
});


/**
 * End Main Functions
 * Begin Events
 * 
 */
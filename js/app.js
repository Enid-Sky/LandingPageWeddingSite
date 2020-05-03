/**
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

/**
 * Define Global Variables
 */
/*
const navbar = document.querySelector('#navbar__list');
const sections = document.querySelectorAll('section');
const sectionName = document.querySelectorAll('section[data-nav]');

*/

const navbar = document.querySelector("#navbar__list");
const sections = document.getElementsByTagName('section');

/**
 * End Global Variables
 * 
 * 
 * Start Helper Functions
 */




/**
 * End Helper Functions
 * 
 */
/*
 * Begin Main Functions
 *
 */



// build the navigation from sections

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


//add class 'active' to section when it is near top of viewport

function setActive() {
  for (const section of sections) {

    const elem = section.getBoundingClientRect();
    if (
      elem.top <= 350 && elem.bottom >= 400
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



















/*
function scrollToClick() {
  navbar.addEventListener('click', function (event) {
    const clicked = document.querySelector('#' + event.target.dataset.nav)

    clicked.scrollIntoView();
  });
};

*/







// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu 
buildNav()

// Scroll to section on link click
scrollToClick();

// Set sections as active




























//__________CODE BITES__________//

//add active-li class to first li

/*
let activeNav = document.querySelector('li');
activeNav.setAttribute('class', 'active-link');

*/


/*
// Add class 'active' to section when near top of viewport

let nav = document.querySelectorAll('list-item')


for (let i = 0; i < nav.length; i++) {
  nav[i].addEventListener('click', function () {
    let current = document.getElementsByClassName('active-class');
    current[0].className = current[0].className.replace('active-class', '');
    this.className += 'active-class';
  });
}
*/
/*
li.addEventListener('click', function)

function isInViewport(elem) {
  var bounding = elem.getBoundingClientRect();
  return (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

if (isInViewport(elem) === true) {
  list[i].classList.add("active");
}

isInViewport(sectionName)
*/

/*
//grab all list items
let listItems = document.querySelectorAll('list-item');
let activeClass = document.querySelector('li');
for (let i = 0; i < listItems.length; i++) {
  listItems[i].addEventListener('click', function () {
    let current = document.getElementsByClassName('active-class');
    current[0].className = current[0].className.replace('active-class', '');
    this.className += 'active-class';
  });
}
*/








/*----------------VERSION 1 -----------*/

/**
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

/**
 * Define Global Variables
 */


/*
const navBar = document.querySelector('#navbar__list')
const sections = document.querySelectorAll('section');
const sectionNames = document.querySelectorAll('section[data-nav]');
navItems = [];


/**
 * End Global Variables
 * 
 * 
 * Start Helper Functions
 */

/*
//creates an array of sections
function navigation(array) {

  for (let i = 0; i < sectionNames.length; i++) {
    let currentName = sectionNames[i]
    array.push(currentName.dataset.nav);
  }
};

navigation(navItems);


/**
 * End Helper Functions
 * 
 */
/*
 * Begin Main Functions
 *
 */

// build the nav

/*
function buildNav(array) {
  array.forEach((element) => {
    let li = document.createElement('li');
    let name = document.createTextNode(element);
    let anchor = document.createElement('a');
    let sectionId = '#' + element.toLowerCase().replace(/ /g, '');
    li.appendChild(anchor);
    anchor.appendChild(name);
    anchor.setAttribute('href', sectionId);
    anchor.setAttribute('class', 'menu__link');
    li.setAttribute('class', 'list-item');
    navBar.appendChild(li);

  });
}

buildNav(navItems);



// Scroll to anchor ID using scrollTO event
function scrollToClick() {
  navBar.addEventListener('click', function (event) {
    const clicked = document.querySelector('#' + event.target.dataset.nav)
    clicked.scrollIntoView();
  });
};

/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu 

// Scroll to section on link click

// Set sections as active
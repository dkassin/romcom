// Create variables targetting the relevant DOM elements here 👇
var homeButton = document.querySelector('.home-button');
var randomCoverButton = document.querySelector('.random-cover-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var viewSavedButton = document.querySelector('.view-saved-button');
var makeNewButton = document.querySelector('.make-new-button');

var coverImage = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var taglineOne = document.querySelector('.tagline-1');
var taglineTwo = document.querySelector('.tagline-2');


var homeView = document.querySelector('.home-view');
var savedView = document.querySelector('.saved-view');
var savedCoversSection = document.querySelector('.saved-covers-section');
var formView = document.querySelector('.form-view')

var userCover = document.querySelector('.user-cover');
var userTitle = document.querySelector('.user-title');
var userTaglineOne = document.querySelector('.user-desc1');
var userTaglineTwo = document.querySelector('.user-desc2');
var userCreateBookButton = document.querySelector('.create-new-book-button');
var userForm = document.querySelector('form');
var savedCoversSection = document.querySelector('.saved-covers-section');

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
// window.addEventListner('load', newRandomCover);
randomCoverButton.addEventListener('click', newRandomCover);
viewSavedButton.addEventListener('click', displaySaved);
makeNewButton.addEventListener('click', displayForm);
homeButton.addEventListener('click', displayHome);
userCreateBookButton.addEventListener('click', createNewBook);
saveCoverButton.addEventListener('click', saveCurrentCover);
// Create your event handlers and other functions here 👇

function newRandomCover() {
  currentCover = new Cover(
                          covers[getRandomIndex(covers)],
                          titles[getRandomIndex(titles)],
                          descriptors[getRandomIndex(descriptors)],
                          descriptors[getRandomIndex(descriptors)]);
  displayCover(currentCover);
}

function displayCover(currentCover) {
  coverImage.src = currentCover.cover;
  coverTitle.innerText = currentCover.title;
  taglineOne.innerText = currentCover.tagline1;
  taglineTwo.innerText = currentCover.tagline2;
}

function show(element) {
  element.classList.remove('hidden')
}

function hide(element) {
  element.classList.add('hidden')
}

function displayForm() {
  show(formView)
	show(homeButton)
	hide(homeView)
	hide(savedView)
	hide(saveCoverButton)
	hide(randomCoverButton)
}

function displaySaved() {
  show(savedView)
  show(homeButton)
  hide(homeView)
  hide(formView)
  hide(saveCoverButton)
  hide(randomCoverButton)
  displaySavedCovers();
}

function displayHome() {
  show(homeView)
  show(saveCoverButton)
  show(randomCoverButton)
  show(viewSavedButton)
  show(makeNewButton)
  hide(homeButton)
  hide(userForm)
}

function displaySavedCovers() {
  savedCoversSection.innerHTML = ``;
  savedCovers.forEach((item, i) => {
    savedCoversSection.innerHTML += `
      <section class="mini-cover">
        <img class="cover-image" id="${savedCovers[i].id}" src="${savedCovers[i].cover}">
        <h2 class="cover-title">${savedCovers[i].title}</h2>
        <h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span></h3>
        <img class="price-tag" src="./assets/price.png">
        <img class="overlay" src="./assets/overlay.png">
      </section>
    `
  });
}


function saveCurrentCover() {
  if (!savedCovers.includes(currentCover)) {
    savedCovers.push(currentCover);
  }
  console.log(savedCovers)
}

function createNewBook(event) {
  event.preventDefault();
  if (!userCover.value || !userTitle.value || !userTaglineOne.value || !userTaglineTwo.value) {
    alert("Not all field were filled out!");
  } else {
    currentCover = new Cover(userCover.value, userTitle.value, userTaglineOne.value, userTaglineTwo.value);
    displayCover(currentCover);
    storeNewCover();
    displayHome();
    userForm.reset();
  }
}

function storeNewCover() {
  covers.push(userCover.value);
  titles.push(userTitle.value);
  descriptors.push(userTaglineOne.value);
  descriptors.push(userTaglineTwo.value);
}

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

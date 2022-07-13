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
// Create your event handlers and other functions here 👇

function newRandomCover() {
  currentCover = new Cover(
                          covers[getRandomIndex(covers)],
                          titles[getRandomIndex(titles)],
                          descriptors[getRandomIndex(descriptors)],
                          descriptors[getRandomIndex(descriptors)]);
  displayCover(currentCover);
}

function displayCover() {
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
}

function displayHome() {
  show(homeView)
  show(saveCoverButton)
  show(randomCoverButton)
  show(viewSavedButton)
  show(makeNewButton)
  hide(homeButton)
}

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

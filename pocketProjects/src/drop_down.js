
const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};

function dogLinkCreator(dogs) {
  let dogNames = Object.keys(dogs)
  let dogLiTags = [];
  dogNames.forEach( name => {
    let aTag = document.createElement("a");
    aTag.innerHTML = name;
    aTag.setAttribute("href", dogs[name])

    let liTag = document.createElement("li");
    liTag.classList.add("dog-link");

    liTag.appendChild(aTag);
    dogLiTags.push(liTag);
  })

  return dogLiTags;
}

function attachDogLinks() {
  let dogLinks = dogLinkCreator(dogs);

  let dropDown = document.querySelector('.drop-down-dog-list');
  dogLinks.forEach((li) => {
    dropDown.appendChild(li);
  });
}

attachDogLinks();

let handleEnter = () => {
  let dropDown = document.querySelector('.drop-down-dog-list');
  dropDown.classList.add("show-dogs");
}

let handleLeave = () => {
  let dropDown = document.querySelector('.drop-down-dog-list');
  dropDown.classList.remove("show-dogs");
}

let dropDownNav = document.querySelector('.drop-down-dog-nav');
dropDownNav.addEventListener("mouseenter", handleEnter);
dropDownNav.addEventListener("mouseleave", handleLeave);
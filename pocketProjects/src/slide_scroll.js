function debounce(func, wait = 20, immediate = true) {
  let timeout;

  // This is the function that is actually executed when
  // the DOM event is triggered.
  return function executedFunction() {
    // Store the context of this and any
    // parameters passed to executedFunction
    const context = this;
    const args = arguments;

    // The function to be called after debounce time has elapsed
    const later = function () {
      // null timeout to indicate the debounce ended
      timeout = null;

      // Call function now if you did not in the beginning
      if (!immediate) func.apply(context, args);
    };

    // Determine if you should call the function
    // on the leading or trail end
    const callNow = immediate && !timeout;

    // This will reset the waiting every function execution.
    clearTimeout(timeout);

    // Restart the debounce waiting period - returns true
    timeout = setTimeout(later, wait);

    // Call immediately if you're doing a leading end execution
    if (callNow) func.apply(context, args);
  };
}

let imageElements = document.getElementsByTagName("img");
let images = Array.from(imageElements);

  // console.log("Scroll Y:" + window.scrollY);

  // where the image should slide in: offsetTop: 665
  // where the the bottom of the image is: 665 + 180 = 845
  // where picture is being half-shown: if our scrollY > 665 and scrollY < 845
  // image has been scrolled past: scrollY > 845

function slideImages(){
  console.log("Where the top of the browser is at:" + window.scrollY);
  console.log(`Where the bottom of the browser is at ${window.scrollY + window.innerHeight}`);
  console.log(`Where the top of the image is ${images[0].offsetTop}`);
  images.forEach(image => {
    let slideIn = image.offsetTop < (window.scrollY + window.innerHeight);
    let slideOut = window.scrollY > (image.offsetTop + image.height);

    if (slideIn){
      image.classList.add('active');
    } 
  })
}
window.addEventListener('scroll', debounce(slideImages));

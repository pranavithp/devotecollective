const scrollContainer = document.getElementsByClassName('wrapper');

const lastContainer = document.querySelector('.gridContainer.b');

lastContainer = lastContainer [lastContainer.length-1];
let dummy_x = null;

window.onscroll = function () {
    // Horizontal Scroll.
    var y = document.body.getBoundingClientRect().top;
    scrollContainer.scrollLeft = -y;
    
    // Looping Scroll.
    var diff = window.scrollX - dummy_x;
    if (diff > 0) {
       window.scrollTo(dummy_x, 0); // Adjusted to scrollTo(dummy_x, 0) to loop horizontally
    }
    else if (window.scrollX == 0) {
       window.scrollTo(dummy_x, 0);
    }
 }
  // Adjust the body height if the window resizes.
  window.onresize = resize;
  // Initial resize.
  resize();
  
  // Reset window-based vars
  function resize() {
    document.body.style.height = window.innerHeight + 'px';
    dummy_x = lastContainer.getBoundingClientRect().left + window.scrollX;
 }
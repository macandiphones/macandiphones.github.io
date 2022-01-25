/* ---- BEGIN LAZY LOADING ----- */
/* ------ const observer = lozad(); // lazy loads elements with default selector as '.lozad' ---- */

// Progressive section
window.onload = function() {

  var placeholder = document.querySelectorAll('.progressive_figure');

  placeholder.forEach(element => {
    var smallImage = element.getElementsByClassName('img-small')[0];

    // Load placeholder image
    var img = new Image();
    img.src = smallImage.getAttribute('src')
    img.onload = function () {
      smallImage.classList.add('loaded')
      // Load large image
      var largeImage = new Image();
      largeImage.srcset = element.getAttribute('data-imgset');
      largeImage.src = element.getAttribute('data-src');
      largeImage.classList.add('img-large')
      largeImage.classList.add('lozad')
      largeImage.onload = function () {
        largeImage.classList.add('loaded');
        smallImage.replaceWith(largeImage);
      }
    }
})};

observer.observe();
// const myLazyLoad = new lazyLoad();